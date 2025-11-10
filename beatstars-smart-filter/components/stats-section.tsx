"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TrendingUp, Users, Music, Clock } from "lucide-react"

const stats = [
  { icon: Music, value: "10K+", label: "Premium Beats", color: "text-purple-400" },
  { icon: Users, value: "24.5K", label: "Active Artists", color: "text-orange-400" },
  { icon: TrendingUp, value: "156K", label: "Tracks Shared", color: "text-purple-400" },
  { icon: Clock, value: "<30s", label: "Avg. Search Time", color: "text-orange-400" },
]

export function StatsSection() {
  return (
    <section className="border-y border-border/40 bg-gradient-to-br from-purple-500/5 via-transparent to-orange-500/5">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const Icon = stat.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="mb-4 inline-flex rounded-full bg-purple-500/10 p-4">
        <Icon className={`h-8 w-8 ${stat.color}`} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className={`text-4xl font-bold ${stat.color} md:text-5xl`}
      >
        {stat.value}
      </motion.div>
      <p className="mt-2 text-muted-foreground">{stat.label}</p>
    </motion.div>
  )
}


