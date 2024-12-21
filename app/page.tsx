import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FeatureCard } from "@/components/feature-card"
import { StatsCard } from "@/components/stats-cards"
import { Users, Vote, Blocks, Rocket, ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { memes } from "@/data/memes"

const partnerships = [
  {
    name: "Late Capitalism DAO",
    logo: "/lateLogo.jpeg",
    description: "Investment DAO of the LATE Movement. We invest in intersubjective culture coins. 1000X is FUD. Join the memetic revolution, add zeros."
  },
  {
    name: "Yahtzee DAO",
    logo: "/yatzeeLogo.jpeg",
    description: "The AI VC for Yahtzees, managed by AIrthur Hayes. With recommendations from our fellow Yahtzees."
  },
  {
    name: "TopKek DAO",
    logo: "/topkekLogo.png",
    description: "We aim to invest mainly into established memecoins at fair pricing. We will also act as a FoF (Fund of Funds) and invest in other DAOs that have a great portfolio that we believe will perform well, and we want exposure to the underlying assets. KEK!!"
  },
  {
    name: "3MC DAO",
    logo: "/3mcLogo.jpeg",
    description: "frens get liquidated together."
  },
  {
    name: "Inferno DAO",
    logo: "/infernoDAO.jpeg",
    description: "Inferno DAO focuses on trading on demand narratives in Solana ecosystem to maximize the potential profit and lessen the risk involve. We are money maxi, we follow where the smart money at."
  },
  {
    name: "Elon Meme Fund DAO",
    logo: "/emfLogo.jpeg",
    description: "Elon Meme Fund is the first AI Agent powered VC fund that invests in memes tweeted by Elon Musk."
  },
  {
    name: "sAIm Altman - DAO",
    logo: "/closedAI.png",
    description: "sAIm altman ($CLOSED) is a DAO parodying Sam Altman. It deploys a trading/sniper Telegram bot to facilitate automated investing and sniping on daos.fun for its users, humorously mimicking Altman's AI investment approach in the DAO space."
  }
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/banner-degenfrat.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/70" /> {/* Darker overlay */}
        </div>
        <div className="relative z-10 container flex min-h-screen flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/dal-bcs.png"
              alt="Dalhousie Blockchain Society"
              width={60}
              height={60}
              className="animate-float"
            />
            <span className="text-xl font-semibold">×</span>
            <Image
              src="/logo.jpeg"
              alt="Degen Frat House"
              width={60}
              height={60}
              className="animate-float"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl gradient-text mb-4">
            Degen Frat House DAO
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mb-8">
            The first university-backed DAO, revolutionizing blockchain education and community governance.
            Created by the Dalhousie Blockchain Society.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="https://www.daos.fun/G9erv7NPcnC9LYHHua8kRVrV1Hm2dvvGzssuw1zC9Ddq" className="flex items-center gap-2">
                Join the DAO <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://t.me/+rqjxWMZWtG8yNzdh">Join Community</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-10"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard title="Dalhousie Society Members" value="90+" />
            <StatsCard title="Community Members" value="1,000+" />
            <StatsCard title="Governance Proposals" value="Coming Soon" />
            <StatsCard title="University Partners (incl. Waterloo Blockchain, Columbia Blockchain, etc)" value="5+" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join Degen Frat House?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the future of decentralized education and community governance. A DAO ran like how it should be.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Community Driven"
              description="Join a vibrant community of students and blockchain enthusiasts"
            />
            <FeatureCard
              icon={<Vote className="h-8 w-8" />}
              title="Governance"
              description="Every holder has a voice in determining the future of the DAO"
            />
            <FeatureCard
              icon={<Blocks className="h-8 w-8" />}
              title="Education First"
              description="Access exclusive blockchain education and resources"
            />
            <FeatureCard
              icon={<Rocket className="h-8 w-8" />}
              title="Innovation"
              description="Be part of groundbreaking Web3 initiatives"
            />
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Roadmap</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building the future of decentralized education
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="font-bold">Q1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Building</h3>
                  <p className="text-muted-foreground">Launch DAO governance structure and initial token distribution</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center shrink-0">
                  <span className="font-bold">Q2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Governance</h3>
                  <p className="text-muted-foreground">Establishing a governance structure and pushing community proposals</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/60 flex items-center justify-center shrink-0">
                  <span className="font-bold">Q3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Value Creation</h3>
                  <p className="text-muted-foreground">Create an NFT collection for the core community, create token gated applications for holders, exclusive education and partnerships</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/40 flex items-center justify-center shrink-0">
                  <span className="font-bold">Q4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Massive Scaling</h3>
                  <p className="text-muted-foreground">Expand and launch innovative products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Working with industry leaders to drive innovation in blockchain
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {partnerships.map((partner) => (
              <Card key={partner.name} className="group hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={80}
                    height={80}
                    className="mb-4 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                  <p className="text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Memes Section */}
      <section id="memes" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Community Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The best memes and moments from our vibrant community
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {memes.map((meme) => (
              <Card key={meme.id} className="group overflow-hidden bg-card hover:border-primary/50 transition-colors">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={meme.src}
                      alt={meme.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{meme.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Feed Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Updates</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay connected with our community
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Twitter Feed</h3>
                <div className="aspect-[4/5] bg-card">
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
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Telegram Community</h3>
                <div className="aspect-[4/5] bg-card flex flex-col items-center justify-center text-center p-6">
                  <p className="text-muted-foreground mb-6">
                    Join our active Telegram community to stay updated and connect with other members
                  </p>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="https://t.me/+rqjxWMZWtG8yNzdh" className="flex items-center gap-2">
                      Join Telegram <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Be part of the first university-backed DAO and help shape the future of blockchain education
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="https://www.daos.fun/G9erv7NPcnC9LYHHua8kRVrV1Hm2dvvGzssuw1zC9Ddq" className="flex items-center gap-2">
                Join Now <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://t.me/+rqjxWMZWtG8yNzdh">Join Telegram</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

