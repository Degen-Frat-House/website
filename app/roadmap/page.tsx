"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Users, Rocket, Zap, Globe, Award, ChevronRight } from 'lucide-react'
import Link from "next/link"

interface RoadmapItem {
  quarter: string;
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  milestones: string[];
  status: 'completed' | 'in-progress' | 'upcoming';
}

const roadmapItems: RoadmapItem[] = [
  {
    quarter: "Q4",
    year: "2024",
    title: "Community Building",
    description: "Launch DAO governance structure and initial token distribution. Establish core team and community guidelines.",
    icon: <Users className="w-10 h-10" />,
    milestones: [
      "Launch official website and social media channels",
      "Implement token distribution mechanism",
      "Establish core team roles and responsibilities",
      "Create and publish community guidelines",
      "Host inaugural community AMA session"
    ],
    status: 'completed'
  },
  {
    quarter: "Q1",
    year: "2025",
    title: "Governance Implementation",
    description: "Roll out voting mechanisms and proposal systems. Conduct first community-driven initiatives.",
    icon: <Calendar className="w-10 h-10" />,
    milestones: [
      "Develop and launch on-chain voting system",
      "Implement proposal submission and review process",
      "Conduct first community vote on DAO direction",
      "Establish working groups for key DAO functions",
      "Launch community-driven content creation program"
    ],
    status: 'in-progress'
  },
  {
    quarter: "Q2",
    year: "2025",
    title: "Education Platform Launch",
    description: "Develop and launch the core education platform with courses, workshops, and resources.",
    icon: <Rocket className="w-10 h-10" />,
    milestones: [
      "Design and develop education platform MVP",
      "Create initial course content on blockchain fundamentals",
      "Implement gamification elements for learning engagement",
      "Launch beta testing phase with select community members",
      "Integrate credential system for course completion"
    ],
    status: 'upcoming'
  },
  {
    quarter: "Q3",
    year: "2025",
    title: "Partnerships and Expansion",
    description: "Forge strategic partnerships with universities and blockchain projects. Expand course offerings and community reach.",
    icon: <Globe className="w-10 h-10" />,
    milestones: [
      "Establish partnerships with 5+ top universities",
      "Collaborate with leading blockchain projects for exclusive content",
      "Launch advanced courses on DeFi, NFTs, and Web3 development",
      "Implement cross-chain learning modules",
      "Host first annual Degen Frat House blockchain conference"
    ],
    status: 'upcoming'
  },
  {
    quarter: "Q3",
    year: "2025",
    title: "Innovation Incubator",
    description: "Launch an incubator program to foster innovative blockchain projects within the community.",
    icon: <Zap className="w-10 h-10" />,
    milestones: [
      "Develop incubator program structure and application process",
      "Launch seed funding mechanism for selected projects",
      "Implement project showcase and demo day events"
    ],
    status: 'upcoming'
  },
  {
    quarter: "Q4",
    year: "2025",
    title: "Global Expansion",
    description: "Scale the DAO globally with localized content, regional events, and multi-language support.",
    icon: <Globe className="w-10 h-10" />,
    milestones: [
      "Launch multi-language support for the platform",
      "Establish regional hubs in key blockchain markets",
      "Implement culturally adapted learning content",
      "Host international hackathon series",
      "Develop global ambassador program"
    ],
    status: 'upcoming'
  },
]

const RoadmapItem = ({ item, index }: { item: RoadmapItem; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex items-start mb-16"
    >
      <div className="flex-shrink-0 w-24 h-24 rounded-full bg-primary flex items-center justify-center mr-6">
        <div className="text-center">
          <span className="font-bold text-2xl text-primary-foreground">{item.quarter}</span>
          <span className="block text-sm text-primary-foreground">{item.year}</span>
        </div>
      </div>
      <div className="flex-grow">
        <Card className={`
          border-l-4 
          ${item.status === 'completed' ? 'border-l-green-500' : 
            item.status === 'in-progress' ? 'border-l-yellow-500' : 
            'border-l-blue-500'}
        `}>
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              {item.icon}
              <h3 className="text-2xl font-semibold ml-4">{item.title}</h3>
            </div>
            <p className="text-muted-foreground text-lg mb-4">{item.description}</p>
            <ul className="space-y-2">
              {item.milestones.map((milestone, i) => (
                <li key={i} className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary mr-2 mt-1" />
                  <span>{milestone}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center">
              <span className={`
                px-2 py-1 rounded-full text-xs font-semibold
                ${item.status === 'completed' ? 'bg-green-200 text-green-800' : 
                  item.status === 'in-progress' ? 'bg-yellow-200 text-yellow-800' : 
                  'bg-blue-200 text-blue-800'}
              `}>
                {item.status === 'completed' ? 'Completed' : 
                 item.status === 'in-progress' ? 'In Progress' : 
                 'Upcoming'}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

const ParallaxSection = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('/roadmap-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y
          }}
        />
      </div>
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Building the Future of Blockchain Education</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Our roadmap outlines our journey to revolutionize blockchain education and community governance. Join us in shaping the future of Web3.
          </p>
        </div>
      </div>
    </div>
  )
}

const MilestoneCard = ({ title, value }: { title: string, value: string }) => (
  <Card className="bg-black/40 backdrop-blur-sm border-primary/20">
    <CardContent className="p-6 text-center">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold text-primary">{value}</p>
    </CardContent>
  </Card>
)

export default function RoadmapPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.h1
          className="text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Degen Frat House Roadmap
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our journey to revolutionize blockchain education and community governance. Explore our ambitious plans and milestones as we build the future of decentralized learning.
        </motion.p>

        <div className="max-w-4xl mx-auto">
          {roadmapItems.map((item, index) => (
            <RoadmapItem key={item.quarter + item.year} item={item} index={index} />
          ))}
        </div>

        <ParallaxSection />

        <div className="my-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Key Milestones End of 2025</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <MilestoneCard title="Community Members" value="10,000+" />
            <MilestoneCard title="Courses Launched" value="50+" />
            <MilestoneCard title="Partner Universities" value="15+" />
            <MilestoneCard title="Projects Incubated" value="25+" />
          </div>
        </div>

        <div className="my-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Vision for the Future</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-black/40 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">World-Class Education</h3>
                <p className="text-muted-foreground">Providing cutting-edge blockchain education accessible to everyone, everywhere.</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Thriving Community</h3>
                <p className="text-muted-foreground">Fostering a global network of blockchain enthusiasts, developers, and innovators.</p>
              </CardContent>
            </Card>
            <Card className="bg-black/40 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6">
                <Rocket className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation Hub</h3>
                <p className="text-muted-foreground">Incubating groundbreaking projects that push the boundaries of blockchain technology.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8">Ready to Be Part of Our Journey?</h2>
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

