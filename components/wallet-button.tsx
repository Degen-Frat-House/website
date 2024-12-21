"use client"

import { Button } from "@/components/ui/button"
import { useWallet } from "@/contexts/wallet-context"
import { Loader2, Wallet } from 'lucide-react'

export function WalletButton() {
  const { connected, connecting, connect, disconnect, tokenCount } = useWallet()

  return (
    <div className="flex items-center gap-2">
      {connected && tokenCount !== null && (
        <span className="text-sm font-medium">
          {tokenCount.toLocaleString()} FRAT
        </span>
      )}
      <Button
        variant={connected ? "outline" : "default"}
        size="sm"
        onClick={connected ? disconnect : connect}
        disabled={connecting}
      >
        {connecting ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Wallet className="mr-2 h-4 w-4" />
        )}
        {connected ? "Disconnect" : "Connect Wallet"}
      </Button>
    </div>
  )
}

