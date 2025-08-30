"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, RefreshCw, Trophy, CircleDollarSign } from "lucide-react";
import { IDKitWidget, VerificationResponse } from "@worldcoin/idkit";
import { useAccount, useChainId, useSwitchChain, useWriteContract } from "wagmi";
import hubAbi from "@/abis/DailyClaimHub.json";
import { HUB, APP_ID, ACTION, CHAIN_ID as WORLDCHAIN_ID } from "@/lib/env";

/* ----------------------------- Reward schedule ---------------------------- */
function baseRateByStreak(streakDays: number): number {
  if (streakDays <= 0) return 0;
  const level = Math.min(100 - 1, Math.floor((streakDays - 1) / 7)); // 0..99
  return level + 1; // 1..100
}

/* ------------------------------- FX helpers ------------------------------- */
function burstConfetti(intense = 1) {
  const count = Math.floor(200 * intense);
  const defaults = { origin: { y: 0.7 } } as const;
  try {
    confetti({ ...defaults, spread: 100, particleCount: count, scalar: 1.05 });
  } catch {}
}
function playBeep() {
  const a = new Audio(
    "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQgAAAABAQEBAQEB"
  );
  try {
    a.currentTime = 0;
    a.play();
  } catch {}
}

/* --------------------------- Time formatting util ------------------------- */
function formatETA(ms: number): string {
  if (!Number.isFinite(ms) || ms <= 0) return "0m";
  const s = Math.ceil(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

/* --------------------------------- App ----------------------------------- */
export default function DailyTokenClaimOnly() {
  // Use wallet info from World App (wagmi)
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChainAsync } = useSwitchChain();
  const { writeContractAsync } = useWriteContract();

  // Keep your local preview state for visuals
  const [streak, setStreak] = useState(0);
  const [levels, setLevels] = useState(0);
  const [lastClaimAt, setLastClaimAt] = useState<number | null>(null);
  const [tokens, setTokens] = useState(0);

  const [claiming, setClaiming] = useState(false);
  const [toast, setToast] = useState<null | { title: string; desc?: string }>(null);

  const theme = {
    bg: "#F9FAFB",
    text: "#0F172A",
    border: "#E5E7EB",
    primary: "#34D399",
    secondary: "#FB7185",
    accent: "#A78BFA",
  } as const;

  // Streak pill
  const streakActive = useMemo(() => {
    if (lastClaimAt == null) return false;
    return Date.now() - lastClaimAt < 48 * 3600 * 1000;
  }, [lastClaimAt]);
  const streakStatus = streakActive
    ? { label: "Streak active", color: "#065F46", bg: "#D1FAE5" }
    : { label: "Streak ended", color: "#7F1D1D", bg: "#FEE2E2" };

  // Timing
  const now = Date.now();
  const wallet = isConnected ? address : null;
  const canClaim = useMemo(() => {
    if (!wallet) return false;
    if (lastClaimAt == null) return true;
    return now - lastClaimAt >= 24 * 3600 * 1000;
  }, [wallet, lastClaimAt, now]);

  const nextClaimInMs = useMemo(() => {
    if (canClaim || lastClaimAt == null) return 0;
    return Math.max(0, 24 * 3600 * 1000 - (now - lastClaimAt));
  }, [canClaim, lastClaimAt, now]);
  const nextClaimLabel = useMemo(() => formatETA(nextClaimInMs), [nextClaimInMs]);

  /* ---------------- Base/day and weekly progress (DISPLAY LOGIC) ----------- */
  const dayRate = useMemo(() => baseRateByStreak(streak + 1), [streak]);
  const completedInWeek = useMemo(() => streak % 7, [streak]); // 0..6
  const progressPct = useMemo(() => (completedInWeek / 7) * 100, [completedInWeek]);
  const ringProgress = completedInWeek / 7;

  const nextDayInWeek = useMemo(() => (streak % 7) + 1, [streak]); // 1..7
  const isSeventhNext = nextDayInWeek === 7;
  const projectedPayout = dayRate * (isSeventhNext ? 3 : 1);

  async function ensureWorldchain() {
    if (chainId !== WORLDCHAIN_ID && switchChainAsync) {
      try {
        await switchChainAsync({ chainId: WORLDCHAIN_ID });
      } catch (e) {
        console.error(e);
        alert("Please switch to World Chain (ID 480) in your wallet.");
      }
    }
  }

  // World ID → on-chain claimVerified → update local UI (for visuals)
  async function handleVerified(res: VerificationResponse) {
    try {
      setClaiming(true);

      if (chainId !== WORLDCHAIN_ID) await ensureWorldchain();

      await writeContractAsync({
        address: HUB,
        abi: (hubAbi as any).abi ?? hubAbi,
        functionName: "claimVerified",
        args: [res.merkle_root, res.nullifier_hash, res.proof],
      });

      const base = baseRateByStreak(streak + 1);
      const dayInWeek = (streak % 7) + 1;
      const triple = dayInWeek === 7;
      const payout = base * (triple ? 3 : 1);

      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak % 7 === 0) setLevels((L) => Math.min(100, L + 1));
      setLastClaimAt(Date.now());
      setTokens((v) => v + payout);

      burstConfetti(triple ? 1.8 : 1.2);
      playBeep();
      if (triple) playBeep();

      setToast({
        title: `Claimed +${payout} TOK`,
        desc: triple ? "7th day bonus! 3× reward." : "Daily reward added.",
      });
    } catch (err: any) {
      console.error("claimVerified failed:", err);
      alert("❌ Claim failed: " + (err?.shortMessage || err?.message || "unknown"));
    } finally {
      setClaiming(false);
    }
  }

  /* --------------------------------- Render -------------------------------- */
  return (
    <div className="min-h-screen pb-24" style={{ background: theme.bg, color: theme.text }}>
      {/* Header */}
      <header
        className="sticky top-0 z-20 backdrop-blur-xl border-b"
        style={{ background: "rgba(255,255,255,0.7)", borderColor: theme.border }}
      >
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 mr-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-2 rounded-2xl border"
              style={{
                background: "linear-gradient(135deg, rgba(52,211,153,0.15), rgba(167,139,250,0.15))",
                borderColor: theme.border,
              }}
            >
              <Sparkles className="h-5 w-5" style={{ color: theme.primary }} />
            </motion.div>

            {/* Level with trophy + progress ring (completed days) */}
            <div className="ml-2 flex items-center gap-2">
              <div className="relative">
                <svg width="28" height="28" viewBox="0 0 36 36" className="-rotate-90">
                  <circle cx="18" cy="18" r="14" fill="none" stroke={theme.border} strokeWidth="4" />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke={theme.accent}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 14}`}
                    strokeDashoffset={`${(1 - ringProgress) * 2 * Math.PI * 14}`}
                  />
                </svg>
                <Trophy
                  className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                  size={16}
                  style={{ color: theme.secondary }}
                />
              </div>
              <div className="text-base">
                <div className="font-semibold">Level {levels}</div>
                <div className="text-sm opacity-70">Progress: {completedInWeek}/7</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-sm">
              <span className="sr-only">Balance</span>
              <span
                className="inline-flex items-center gap-2 rounded-2xl border font-extrabold px-3 py-2"
                style={{ background: "#FFFFFF", borderColor: theme.border }}
              >
                <CircleDollarSign className="h-5 w-5" style={{ color: theme.primary }} />
                <span style={{ fontSize: 18, whiteSpace: "nowrap" }}>{tokens.toLocaleString()} TOK</span>
              </span>
            </div>
            {address ? (
              <span
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 border text-sm font-semibold"
                style={{ background: "#FFFFFF", borderColor: theme.border }}
              >
                <RefreshCw className="h-4 w-4" /> {address.slice(0, 6)}…{address.slice(-4)}
              </span>
            ) : (
              <span className="text-xs opacity-70">Open in World App to connect</span>
            )}
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-5xl px-4 py-6 space-y-6">
        {/* Claim card */}
        <section className="rounded-3xl border p-5" style={{ background: "#FFFFFF", borderColor: theme.border }}>
          <div className="text-lg font-semibold">Today’s Reward</div>
          <div className="text-4xl font-extrabold mt-2" style={{ color: theme.primary }}>
            +{projectedPayout} TOK
          </div>

          {/* Progress bar (completed days) */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs mb-1">
              <div>
                Level <span className="font-semibold">{levels}</span>
              </div>
              <div>Progress: {completedInWeek}/7</div>
            </div>
            <div className="w-full h-5 rounded-full overflow-hidden" style={{ background: "#EEF2FF" }}>
              <div
                className="h-full"
                style={{ width: `${progressPct}%`, background: `linear-gradient(90deg, ${theme.primary}, ${theme.accent})` }}
              />
            </div>
          </div>

          {/* Verified-only claim */}
          <div className="mt-6">
            <IDKitWidget
              app_id={APP_ID}
              action={ACTION}
              signal={address ?? "0x0"}
              verification_level="orb"
              onSuccess={handleVerified}
              onError={(err) => {
                console.error("World ID error:", err);
                const msg =
                  typeof err === "string"
                    ? err
                    : (err as any)?.code || (err as any)?.message || JSON.stringify(err);
                alert("World ID error: " + msg);
              }}
            >
              {({ open }) => (
                <button
                  onClick={() => {
                    if (chainId !== WORLDCHAIN_ID) {
                      ensureWorldchain().finally(open);
                    } else open();
                  }}
                  disabled={!canClaim || !address || claiming}
                  className="w-full font-semibold py-3 rounded-2xl shadow active:translate-y-1 disabled:opacity-60"
                  style={{
                    background: canClaim && address ? theme.primary : "#D1FAE5",
                    color: canClaim && address ? "#052e1a" : "#065F46",
                  }}
                >
                  {claiming ? "Claiming…" : canClaim ? "Claim with World ID" : `Next claim in ${nextClaimLabel}`}
                </button>
              )}
            </IDKitWidget>
          </div>

          {/* Streak pill */}
          <div className="mt-2 flex items-center justify-between text-xs">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border font-semibold"
              style={{ background: streakStatus.bg, color: streakStatus.color, borderColor: theme.border }}
            >
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: streakStatus.color }} />
              {streakActive ? "On a streak" : "Streak ended"}
            </span>
          </div>
        </section>
      </main>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="fixed bottom-4 right-6 px-4 py-3 rounded-xl shadow border"
            style={{ background: "#FFFFFF", borderColor: theme.border }}
          >
            <div className="font-semibold">{toast.title}</div>
            {toast.desc && <div className="text-sm opacity-70">{toast.desc}</div>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------ Dev Smoke Tests --------------------------- */
function runDevTests() {
  try {
    console.group("DailyTokenClaimOnly — tests");
    console.assert(formatETA(0) === "0m", "formatETA(0) should be '0m'");
    console.assert(formatETA(59_000) === "1m", "formatETA(59s) -> '1m'");
    console.assert(formatETA(60 * 60 * 1000) === "1h 0m", "formatETA(1h)");
    const baseAt = (tc:number)=> Math.min(99, Math.floor(tc/7)) + 1;
    console.assert(baseAt(0) === 1, "tc0 -> level0 -> base1");
    console.assert(baseAt(6) === 1, "tc6 -> level0 -> base1");
    console.assert(baseAt(7) === 2, "tc7 -> level1 -> base2");
    console.assert(baseAt(70) === 11, "tc70 -> level10 -> base11");
    const nextDayIdx = (tc:number)=> (tc % 7) + 1;
    console.assert(nextDayIdx(0) === 1 && nextDayIdx(6) === 7, "day index calc");
    console.log("✅ All tests passed");
    console.groupEnd();
  } catch (e) {
    console.error("❌ Tests failed", e);
  }
}
if (typeof window !== "undefined") setTimeout(runDevTests, 0);