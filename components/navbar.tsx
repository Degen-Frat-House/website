"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10)
    })
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-lg border-b" : ""
    }`}>
      <div className="container mx-auto px-4 max-w-7xl flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center gap-2">
            <Image
              src="/degenLogo.png"
              alt="Degen Frat House"
              width={32}
              height={32}
            />
            <span className="hidden md:inline-block font-semibold">
              Degen Frat House
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="/roadmap" className="text-sm font-medium hover:text-primary">
              Roadmap
            </Link>
            <Link href="/community" className="text-sm font-medium hover:text-primary">
              Community
            </Link>
            <Link href="/partners" className="text-sm font-medium hover:text-primary">
              Partners
            </Link>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="https://www.daos.fun/G9erv7NPcnC9LYHHua8kRVrV1Hm2dvvGzssuw1zC9Ddq">
              Join DAO
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

