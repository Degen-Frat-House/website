"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { Connection, PublicKey } from '@solana/web3.js'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'

interface WalletContextType {
  connected: boolean
  connecting: boolean
  publicKey: PublicKey | null
  tokenCount: number | null
  connect: () => Promise<void>
  disconnect: () => void
}

const WalletContext = createContext<WalletContextType>({
  connected: false,
  connecting: false,
  publicKey: null,
  tokenCount: null,
  connect: async () => {},
  disconnect: () => {},
})

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [connected, setConnected] = useState(false)
  const [connecting, setConnecting] = useState(false)
  const [publicKey, setPublicKey] = useState<PublicKey | null>(null)
  const [tokenCount, setTokenCount] = useState<number | null>(null)

  // Initialize Solana connection
  const connection = new Connection('https://api.mainnet-beta.solana.com')
  const FRAT_TOKEN = new PublicKey('G9erv7NPcnC9LYHHua8kRVrV1Hm2dvvGzssuw1zC9Ddq')

  async function getTokenBalance(walletAddress: PublicKey) {
    try {
      const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
        walletAddress,
        { programId: TOKEN_PROGRAM_ID }
      )

      const fratAccount = tokenAccounts.value.find(
        account => account.account.data.parsed.info.mint === FRAT_TOKEN.toString()
      )

      if (fratAccount) {
        return Number(fratAccount.account.data.parsed.info.tokenAmount.amount)
      }

      return 0
    } catch (error) {
      console.error('Error fetching token balance:', error)
      return 0
    }
  }

  async function connect() {
    try {
      setConnecting(true)
      
      if (!window.solana || !window.solana.isPhantom) {
        window.open('https://phantom.app/', '_blank')
        return
      }

      const response = await window.solana.connect()
      const walletPublicKey = new PublicKey(response.publicKey.toString())
      
      setPublicKey(walletPublicKey)
      setConnected(true)

      const balance = await getTokenBalance(walletPublicKey)
      setTokenCount(balance)
    } catch (error) {
      console.error('Error connecting wallet:', error)
    } finally {
      setConnecting(false)
    }
  }

  function disconnect() {
    if (window.solana) {
      window.solana.disconnect()
      setConnected(false)
      setPublicKey(null)
      setTokenCount(null)
    }
  }

  useEffect(() => {
    if (window.solana) {
      window.solana.on('connect', () => {
        setConnected(true)
      })
      window.solana.on('disconnect', () => {
        setConnected(false)
        setPublicKey(null)
        setTokenCount(null)
      })
    }

    return () => {
      if (window.solana) {
        window.solana.disconnect()
      }
    }
  }, [])

  return (
    <WalletContext.Provider
      value={{
        connected,
        connecting,
        publicKey,
        tokenCount,
        connect,
        disconnect,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  return useContext(WalletContext)
}

