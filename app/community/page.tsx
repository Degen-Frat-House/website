"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Twitter, MessageCircle, Users, Award, Zap, Globe, Send } from 'lucide-react'
import Link from "next/link"
import { useState } from 'react'

const communityStats = [
  { icon: <Users className="w-8 h-8" />, title: "Active Members", value: "1,000+" },
  { icon: <Award className="w-8 h-8" />, title: "Countries Represented", value: "10+" },
  { icon: <Zap className="w-8 h-8" />, title: "Daily Interactions", value: "20,000+" },
  { icon: <Globe className="w-8 h-8" />, title: "Languages Supported", value: "5+" },
]

const upcomingEvents = [
  { date: "2025", title: "DeFi Deep Dive Webinar", description: "Explore the latest trends in decentralized finance with industry experts." },
  { date: "2025", title: "Virtual Blockchain Hackathon", description: "48-hour virtual hackathon to build innovative blockchain solutions." },
  { date: "2025", title: "Virtual NFT Art Exhibition", description: "Showcase of community-created NFT artworks with live auctions." },
  { date: "2025", title: "Virtual Governance Town Hall", description: "Discuss and vote on upcoming DAO proposals and initiatives." },
]

const testimonials = [
  { name: "Turk Cohce", role: "Blockchain Developer", quote: "The Degen Frat House community has been instrumental in my growth as a developer. The resources and support are unmatched!" },
  { name: "Ashar Belanger", role: "DeFi Enthusiast", quote: "I've found my tribe! The discussions and insights shared here have helped me navigate the complex world of DeFi with confidence." },
  { name: "Cole Dermott", role: "NFT Artist", quote: "The exposure and opportunities I've gained through this community have been life-changing. It's more than just a DAO, it's a launchpad for creatives in Web3." },
]

const ParallaxSection = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="relative h-[50vh] overflow-hidden my-20">
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
      <div className="relative z-20 h-full flex items-center justify-center text-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Join a Global Movement</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Connect with like-minded individuals, shape the future of blockchain, and be part of a revolution in decentralized education and governance.
          </p>
        </div>
      </div>
    </div>
  )
}

const StatCard = ({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) => (
  <Card className="bg-black/40 backdrop-blur-sm border-primary/20">
    <CardContent className="p-6 flex flex-col items-center text-center">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold text-primary">{value}</p>
    </CardContent>
  </Card>
)

const EventCard = ({ date, title, description }: { date: string, title: string, description: string }) => {
  const eventDate = new Date(date)
  const formattedDate = eventDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

  return (
    <Card className="bg-black/40 backdrop-blur-sm border-primary/20">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4">
            <span className="font-bold">{formattedDate}</span>
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

const TestimonialCard = ({ name, role, quote }: { name: string, role: string, quote: string }) => (
  <Card className="bg-black/40 backdrop-blur-sm border-primary/20">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <p className="italic text-muted-foreground">{quote}</p>
    </CardContent>
  </Card>
)

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <Card className="bg-black/40 backdrop-blur-sm border-primary/20">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
        <p className="text-muted-foreground mb-4">Subscribe to our newsletter for the latest community news and events.</p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow"
            required
          />
          <Button type="submit">
            Subscribe <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

const CommunityForum = () => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle message submission
    console.log('Message submitted:', message)
    setMessage('')
  }

  return (
    <Card className="bg-black/40 backdrop-blur-sm border-primary/20">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4">Community Forum</h3>
        <div className="space-y-4 mb-4">
          <div className="bg-black/20 p-4 rounded-lg">
            <p className="font-semibold">@cryptoEnthusiast:</p>
            <p>Has anyone experimented with the new DeFi protocol launched last week? Thoughts?</p>
          </div>
          <div className="bg-black/20 p-4 rounded-lg">
            <p className="font-semibold">@blockchainDev:</p>
            <p>Working on a new project and looking for collaborators. DM me if interested!</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <Textarea
            placeholder="Join the conversation..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mb-2"
            required
          />
          <Button type="submit">
            Post Message <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join Our Vibrant Community
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Connect, collaborate, and grow with fellow blockchain enthusiasts and future leaders. Be part of a revolutionary movement in decentralized education and governance.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

        <ParallaxSection />

        <div className="my-20">
          <h2 className="text-4xl font-bold text-center mb-12">Upcoming Community Events</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 my-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden h-full bg-black/40 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Twitter className="mr-2" /> Twitter Feed
                </h3>
                <div className="flex-grow bg-black/20 rounded-lg overflow-hidden">
                  <div id="twitter-feed" className="h-full">
                    <a 
                      className="twitter-timeline" 
                      data-theme="dark"
                      data-chrome="transparent nofooter noborders"
                      href="https://twitter.com/degenfrat?ref_src=twsrc%5Etfw"
                    >
                      Tweets by degenfrat
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden h-full bg-black/40 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <MessageCircle className="mr-2" /> Telegram Community
                </h3>
                <div className="flex-grow bg-black/20 rounded-lg flex flex-col items-center justify-center text-center p-6">
                  <p className="text-muted-foreground mb-6 text-lg">
                    Join our active Telegram community to stay updated and connect with other members. Engage in discussions, share ideas, and be part of the Degen Frat House movement.
                  </p>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="https://t.me/+rqjxWMZWtG8yNzdh" className="flex items-center gap-2">
                      Join Telegram <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="my-20">
          <h2 className="text-4xl font-bold text-center mb-12">Community Testimonials</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 my-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NewsletterSignup />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CommunityForum />
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8">Ready to Join Our Community?</h2>
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

