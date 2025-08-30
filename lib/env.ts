export const APP_ID = process.env.NEXT_PUBLIC_WORLD_ID_APP_ID as `app_${string}`;
export const ACTION_VERIFY = process.env.NEXT_PUBLIC_WORLD_ID_ACTION_VERIFY || "connect";
export const ACTION_CLAIM = process.env.NEXT_PUBLIC_WORLD_ID_ACTION_CLAIM || "claim";

export const HUB = process.env.NEXT_PUBLIC_HUB as `0x${string}`;
export const TOKEN = process.env.NEXT_PUBLIC_TOKEN as `0x${string}`;

export const CHAIN_ID = 480; // World Chain mainnet

if (!APP_ID) console.warn("Missing NEXT_PUBLIC_WORLD_ID_APP_ID");
if (!HUB) console.warn("Missing NEXT_PUBLIC_HUB");