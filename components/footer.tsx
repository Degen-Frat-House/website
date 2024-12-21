import { GraduationCap } from 'lucide-react'
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[#FFD700]/40 bg-[#002D72]/80">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
  <div className="flex items-center gap-2">
    <GraduationCap className="h-6 w-6" />
    <span className="font-bold">Degen Frat House DAO</span>
  </div>
  <div className="flex gap-4">
    <Link href="https://x.com/degenfrat" className="text-muted-foreground hover:text-foreground">
      Twitter
    </Link>
    <Link href="https://t.me/degenfrathouse" className="text-muted-foreground hover:text-foreground">
      Telegram
    </Link>
    <Link
      href="https://www.daos.fun/G9erv7NPcnC9LYHHua8kRVrV1Hm2dvvGzssuw1zC9Ddq"
      className="text-muted-foreground hover:text-foreground"
    >
      DAO
    </Link>
  </div>
</div>
    </footer>
  )
}

