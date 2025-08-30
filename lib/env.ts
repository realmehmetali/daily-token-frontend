export const CHAIN_ID = 480 as const;

export const HUB  = process.env.NEXT_PUBLIC_HUB as `0x${string}`;

// Strong types help catch misconfigured envs at build time:
export const APP_ID = process.env.NEXT_PUBLIC_WORLD_ID_APP_ID as `app_${string}`;

export const ACTION_VERIFY = process.env
  .NEXT_PUBLIC_WORLD_ID_ACTION_VERIFY as `action_${string}`;

export const ACTION_CLAIM = process.env
  .NEXT_PUBLIC_WORLD_ID_ACTION_CLAIM as `action_${string}`;