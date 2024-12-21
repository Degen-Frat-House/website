"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ExternalLink, Globe, Users, Zap, TrendingUp } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { useState } from 'react'

const partnerships = [
  {
    name: "Late Capitalism DAO",
    logo: "/lateLogo.jpeg",
    description: "Investment DAO of the LATE Movement. We invest in intersubjective culture coins. 1000X is FUD. Join the memetic revolution, add zeros.",
    website: "https://www.daos.fun/78E2eW1QBg15cinNR4wfFzu9SJPsDXQKR29SNpApg78J",
    members: "25,000+",
    tvl: "$1.7M+",
    keyProjects: ["Meme Coin Index Fund", "Partnerships with DAOs"],
    collaborations: ["Joint research on meme economics", "Cross-DAO governance experiments"]
  },
  {
    name: "Yahtzee DAO",
    logo: "/yatzeeLogo.jpeg",
    description: "The AI VC for Yahtzees, managed by AIrthur Hayes. With recommendations from our fellow Yahtzees.",
    website: "https://www.daos.fun/6hUC9DN73kdinkth3JdELGYnEbLEnEE4NvbzzoG3yPKK",
    members: "4,000+",
    tvl: "$3M+",
    keyProjects: ["Decentralized Prediction Markets", "Meme Coin Analysis"],
    collaborations: ["Cross-chain interoperability research", "Joint trading initiatives"]
  },
  {
    name: "TopKek DAO",
    logo: "/topkekLogo.png",
    description: "We aim to invest mainly into established memecoins at fair pricing. We will also act as a FoF (Fund of Funds) and invest in other DAOs that have a great portfolio that we believe will perform well, and we want exposure to the underlying assets. KEK!!",
    website: "https://topkek.io/",
    members: "2,000+",
    tvl: "$1.5M+",
    keyProjects: ["DAO Auctions", "Inter-DAO Partnerships", "Community Building"],
    collaborations: ["AMA & Twitter Spaces", "Cross-DAO memetic asset swaps", "Joint meme creation workshops", "DAO Launch Auctions"]
  },
  {
    name: "3MC DAO",
    logo: "/3mcLogo.jpeg",
    description: "frens get liquidated together.",
    website: "https://3mc.fund/",
    members: "350+",
    tvl: "$80k+",
    keyProjects: ["Meme and Market Making"],
    collaborations: ["Marketing", "Meme Competitions", "Community Voting"]
  },
  {
    name: "Inferno DAO",
    logo: "/infernoDAO.jpeg",
    description: "Inferno DAO focuses on trading on demand narratives in Solana ecosystem to maximize the potential profit and lessen the risk involve. We are money maxi, we follow where the smart money at.",
    website: "https://infernodao.xyz/",
    members: "2,500+",
    tvl: "$150k+",
    keyProjects: ["Narrative Detection", "Risk Management", "Profit Maximizing"],
    collaborations: ["Meme Competitions", "Community Voting", "Ecosystem growth initiatives"]
  },
  {
    name: "Elon Meme Fund DAO",
    logo: "/emfLogo.jpeg",
    description: "Elon Meme Fund is the first AI Agent powered VC fund that invests in memes tweeted by Elon Musk.",
    website: "https://www.daos.fun/AGpV2fP3xdE2hRZ1onsJYVo5mUpj8XHEPZJDDAdHkKRW",
    members: "2,000+",
    tvl: "$45k+",
    keyProjects: ["Elon Tweet Meme Investment", "Meme-to-Token Bridge"],
    collaborations: ["AI-driven Meme Analytics", "Community Voting", "Ecosystem growth initiatives"]
  },
  {
    name: "sAIm Altman - DAO",
    logo: "/closedAI.png",
    description: "sAIm altman ($CLOSED) is a DAO parodying Sam Altman. It deploys a trading/sniper Telegram bot to facilitate automated investing and sniping on daos.fun for its users, humorously mimicking Altman's AI investment approach in the DAO space.",
    website: "https://www.closedai.gg/",
    members: "2,500+",
    tvl: "$650k+",
    keyProjects: ["AI Agents and Trading Bots", "Decentralized AI Training", "DAO Sniping Algorithm"],
    collaborations: ["Shared AI Computing", "Loaned Trading Bots", "Ecosystem Growth Initiatives"]
  }
]

const PartnershipValueProps = [
    { icon: <Globe className="w-12 h-12" />, title: "Global Reach", description: "Tap into a worldwide network of blockchain innovators and enthusiasts" },
    { icon: <Users className="w-12 h-12" />, title: "Community Synergy", description: "Collaborate with diverse communities to drive adoption and innovation" },
    { icon: <Zap className="w-12 h-12" />, title: "Rapid Innovation", description: "Accelerate development through shared resources and knowledge" },
    { icon: <TrendingUp className="w-12 h-12" />, title: "Market Impact", description: "Amplify your market presence and influence in the blockchain space" },
  ]
  
  const ParallaxHero = () => {
    const { scrollYProgress } = useScroll()
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  
    return (
      <div className="relative h-[50vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/roadmap-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Strategic Partnerships</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Collaborating with industry leaders to drive innovation and shape the future of decentralized finance and blockchain technology.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  const PartnerCard = ({ partner }: { partner: typeof partnerships[0] }) => {
    const [isFlipped, setIsFlipped] = useState(false)
  
    return (
      <motion.div
        className="h-[600px] [perspective:1000px] w-full h-full relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
      >
        <motion.div
          className="relative w-full h-full [transform-style:preserve-3d]"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="absolute w-full h-full [backface-visibility:hidden] bg-black/40 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={120}
                className="mb-6 rounded-full"
              />
              <h3 className="text-2xl font-semibold mb-4">{partner.name}</h3>
              <p className="text-muted-foreground flex-grow">{partner.description}</p>
              <Button variant="outline" className="mt-4" asChild>
                <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="absolute w-full h-full [backface-visibility:hidden] bg-black/40 backdrop-blur-sm border-primary/20 [transform:rotateY(180deg)]">
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-semibold mb-4">{partner.name}</h3>
                <div className="mb-4">
                  <p className="font-semibold">Members: <span className="text-primary">{partner.members}</span></p>
                  <p className="font-semibold">TVL: <span className="text-primary">{partner.tvl}</span></p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Projects:</h4>
                  <ul className="list-disc list-inside">
                    {partner.keyProjects.map((project, index) => (
                      <li key={index} className="text-sm">{project}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Collaborations:</h4>
                <ul className="list-disc list-inside">
                  {partner.collaborations.map((collab, index) => (
                    <li key={index} className="text-sm">{collab}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    )
  }
  
  const ValuePropCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <Card className="bg-black/40 backdrop-blur-sm border-primary/20">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="text-primary mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
  
  const PartnershipMetrics = () => {
    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  
    return (
      <motion.div
        style={{ scale, opacity }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
      >
        <Card className="bg-black/40 backdrop-blur-sm border-primary/20">
          <CardContent className="p-6 text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">$3M+</h3>
            <p className="text-lg">Total Value Locked</p>
          </CardContent>
        </Card>
        <Card className="bg-black/40 backdrop-blur-sm border-primary/20">
          <CardContent className="p-6 text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">Coming Soon</h3>
            <p className="text-lg">Joint Projects</p>
          </CardContent>
        </Card>
        <Card className="bg-black/40 backdrop-blur-sm border-primary/20">
          <CardContent className="p-6 text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">10,000+</h3>
            <p className="text-lg">Community Members Across Partners</p>
          </CardContent>
        </Card>
        <Card className="bg-black/40 backdrop-blur-sm border-primary/20">
          <CardContent className="p-6 text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
            <p className="text-lg">Countries Represented</p>
          </CardContent>
        </Card>
      </motion.div>
    )
  }
  
  const CollaborationShowcase = () => {
    return (
      <Tabs defaultValue="research" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="research">Research Initiatives</TabsTrigger>
          <TabsTrigger value="events">Joint Events</TabsTrigger>
          <TabsTrigger value="products">Co-Created Products</TabsTrigger>
          <TabsTrigger value="governance">Cross-DAO Governance</TabsTrigger>
        </TabsList>
        <TabsContent value="research">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Groundbreaking Research Collaborations</h3>
              <ul className="space-y-2">
                <li>Coming soon...</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="events">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Exciting Joint Events</h3>
              <ul className="space-y-2">
                <li>• Joint Meme Competition</li>
                <li>• Annual Cross-DAO Hackathons</li>
                <li>• Quarterly DAO Governance Roundtable</li>
                <li>More coming soon...</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="products">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Innovative Co-Created Products</h3>
              <ul className="space-y-2">
                <li>Coming soon</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="governance">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Revolutionary Cross-DAO Governance</h3>
              <ul className="space-y-2">
                <li>• Inter-DAO Proposal System: Collaborative decision-making across DAOs</li>
                <li>More coming soon...</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    )
  }
  
  export default function PartnersPage() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
        <ParallaxHero />
        
        <div className="container mx-auto px-4 py-16">
          <motion.h2 
            className="text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Esteemed Partners
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Collaborating with industry leaders to drive innovation in blockchain and decentralized finance
          </motion.p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-[600px]">
            {partnerships.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
  
          <motion.h2 
            className="text-4xl font-bold mt-24 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            The Power of Partnership
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-24">
            {PartnershipValueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ValuePropCard {...prop} />
              </motion.div>
            ))}
          </div>
  
          <motion.h2 
            className="text-4xl font-bold mt-24 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Partnership Impact
          </motion.h2>
          <PartnershipMetrics />
  
          <motion.h2 
            className="text-4xl font-bold mt-24 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Collaborative Initiatives
          </motion.h2>
          <CollaborationShowcase />
  
          <motion.div 
            className="mt-24 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-8">Become a Partner</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in shaping the future of decentralized finance and blockchain technology. Together, we can create unprecedented value and drive innovation.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
              <Link href="/contact" className="flex items-center gap-2">
                Partner With Us <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    )
  }
  
  