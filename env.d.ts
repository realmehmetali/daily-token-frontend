// env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_WORLD_ID_APP_ID: `app_${string}`;
      NEXT_PUBLIC_WORLD_ID_ACTION: string;
      NEXT_PUBLIC_HUB: `0x${string}`;
      NEXT_PUBLIC_CHAIN_ID?: string;
      NEXT_PUBLIC_RPC?: string;
    }
  }