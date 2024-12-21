interface SolanaProvider {
    isPhantom?: boolean;
    connect(): Promise<{ publicKey: { toString(): string } }>;
    disconnect(): void;
    on(event: string, callback: () => void): void;
    off(event: string, callback: () => void): void;
  }
  
  declare global {
    interface Window {
      solana?: SolanaProvider;
    }
  }
  
  export {};
  