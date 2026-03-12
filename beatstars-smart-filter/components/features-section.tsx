"use client"

import { Card } from "@/components/ui/card"
import { Sparkles, Zap, Users, TrendingUp, Shield, Music, Brain, Mic2 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Our advanced AI analyzes your lyrics, mood, and style to find the perfect beat in seconds.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get instant results with our optimized search algorithm. Find your beat in under 30 seconds.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Music,
    title: "Premium Quality",
    description: "10,000+ professionally produced beats from top producers worldwide. Quality guaranteed.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Mic2,
    title: "Recording Booth",
    description: "Test beats instantly with our built-in recording booth. Record vocals and share with the community.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Join thousands of artists sharing tracks, collaborating, and discovering new music together.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Secure & Legal",
    description: "All beats come with proper licensing. Buy with confidence and focus on your music.",
    color: "from-indigo-500 to-purple-500",
  },
]

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400">
          <Sparkles className="h-4 w-4" />
          Why Choose TriuneBeats
        </div>
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          Everything You Need to
          <span className="block bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
            Create Your Next Hit
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Powerful tools, premium beats, and an amazing community all in one platform
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number]
  index: number
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group relative h-full overflow-hidden border-border/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-lg">
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity group-hover:opacity-5`} />
        <div className="relative">
          <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${feature.color} p-3`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      </Card>
    </motion.div>
  )
}



