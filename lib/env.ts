// lib/env.ts
export const TOKEN = process.env.NEXT_PUBLIC_TOKEN as `0x${string}`;
export const HUB = process.env.NEXT_PUBLIC_HUB as `0x${string}`;

export const APP_ID = process.env.NEXT_PUBLIC_WORLD_ID_APP_ID as `app_${string}`;
export const ACTION_VERIFY = process.env.NEXT_PUBLIC_WORLD_ID_ACTION_VERIFY as string; // e.g. "connect"
export const ACTION_CLAIM = process.env.NEXT_PUBLIC_WORLD_ID_ACTION_CLAIM as string; // e.g. "claim"

export const CHAIN_ID = 480 as const; // World Chain mainnet