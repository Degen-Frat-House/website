"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Users, Vote, Blocks, Rocket, ArrowRight, Zap, Shield, Globe, Coins } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const features = [
  {
    icon: <Users className="h-12 w-12" />,
    title: "Community Driven",
    description: "Join a vibrant community of students and blockchain enthusiasts. Collaborate, learn, and grow together in the exciting world of Web3.",
    details: [
      "Active Telegram community with daily discussions",
      "Collaborative projects and hackathons",
      "Mentorship programs connecting newcomers with experts"
    ]
  },
  {
    icon: <Vote className="h-12 w-12" />,
    title: "Decentralized Governance",
    description: "Every holder has a voice in determining the future of the DAO. Participate in key decisions and shape the direction of our community.",
    details: [
      "On-chain voting for major decisions",
      "Proposal submission and review process",
      "Transparent treasury management",
      "Tiered voting power based on contribution and token holding"
    ]
  },
  {
    icon: <Blocks className="h-12 w-12" />,
    title: "Education First",
    description: "Access exclusive blockchain education and resources. Stay ahead of the curve with cutting-edge knowledge and insights.",
    details: [
      "Curated learning paths for beginners to advanced users",
      "Developping weekly webinars with industry experts",
      "Hands-on workshops on smart contract development",
      "Exclusive access to market analysis"
    ]
  },
  {
    icon: <Rocket className="h-12 w-12" />,
    title: "Innovation Hub",
    description: "Be part of groundbreaking Web3 initiatives. Contribute to projects that are pushing the boundaries of blockchain technology.",
    details: [
      "Planned incubator program for promising blockchain startups post launch",
      "Planned research and development grants for novel use cases",
      "Planned partnerships with leading blockchain platforms"
    ]
  },
  {
    icon: <Zap className="h-12 w-12" />,
    title: "Lightning-Fast Transactions",
    description: "Experience the power of instant, low-cost transactions.",
    details: [
      "Sub-second confirmation times",
      "Negligible transaction fees",
      "Seamless integration with popular wallets"
    ]
  },
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Uncompromising Security",
    description: "Rest easy knowing your assets are protected by state-of-the-art security measures.",
    details: [
      "Multi-signature wallets for DAO treasury",
      "Talented cybersecurity developers at the head of the project"
    ]
  },
  {
    icon: <Globe className="h-12 w-12" />,
    title: "Global Accessibility",
    description: "Break down geographical barriers and connect with a worldwide community of blockchain enthusiasts.",
    details: [
      "Multi-language support for global inclusivity",
      "Community support across all time zones",
      "Planned regional ambassadors program",
      "Planned local meetups and events organized worldwide"
    ]
  },
  {
    icon: <Coins className="h-12 w-12" />,
    title: "Tokenized Ecosystem",
    description: "Benefit from our native token that powers the entire Degen Frat House ecosystem, providing utility and governance rights.",
    details: [
      "Staking rewards for long-term holders",
      "Token-gated access to premium features"
    ]
  },
]

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="mb-4 text-primary">{feature.icon}</div>
          <h2 className="text-2xl font-semibold mb-4">{feature.title}</h2>
          <p className="text-muted-foreground mb-6 flex-grow">{feature.description}</p>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            {feature.details.map((detail, i) => (
              <li key={i} className="mb-2">{detail}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const ParallaxSection = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="relative h-[50vh] overflow-hidden my-20">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/blockchain-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y
        }}
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 h-full flex items-center justify-center text-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Experience the Future of Blockchain</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Degen Frat House DAO is at the forefront of blockchain innovation, providing a platform for learning, collaboration, and growth in the Web3 space.
          </p>
        </div>
      </div>
    </div>
  )
}

const StatCard = ({ title, value }: { title: string, value: string }) => (
  <Card>
    <CardContent className="p-6 text-center">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold text-primary">{value}</p>
    </CardContent>
  </Card>
)

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Revolutionizing Blockchain Education
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover the unique features that make Degen Frat House DAO the premier platform for blockchain enthusiasts and future leaders. Our cutting-edge technology and community-driven approach set us apart in the Web3 landscape.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        <ParallaxSection />

        <div className="my-20">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Degen Frat House DAO?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <StatCard title="Active Members" value="1,000+" />
            <StatCard title="Universities Represented" value="5+" />
            <StatCard title="Complete Community Governance" value="On Lock" />
            <StatCard title="Talented Developers" value="10+" />
          </div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8">Ready to Shape the Future of Blockchain?</h2>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
            <Link href="https://www.daos.fun/G9erv7NPcnC9LYHHua8kRVrV1Hm2dvvGzssuw1zC9Ddq" className="flex items-center gap-2">
              Join the DAO <ArrowRight className="w-6 h-6" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

