export const APP_ID = process.env.APP_ID as `app_${string}`;

export const ACTION_VERIFY =
  (process.env.NEXT_PUBLIC_WORLD_ID_ACTION_VERIFY as string) || "action_connect";

export const ACTION_CLAIM =
  (process.env.NEXT_PUBLIC_WORLD_ID_ACTION_CLAIM as string) || "action_claim";

export const CHAIN_ID = Number(process.env.NEXT_PUBLIC_WORLDCHAIN_ID || 480);

// Your contract hub on World Chain (set this to your deployed address)
export const HUB = process.env.NEXT_PUBLIC_HUB as `0x${string}`;