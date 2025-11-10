"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Zap, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out the platform",
    features: [
      "Browse all beats",
      "5 AI searches per month",
      "Basic recording booth",
      "Community access",
      "Standard quality downloads",
    ],
    cta: "Get Started",
    popular: false,
    color: "border-muted",
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For serious artists and producers",
    features: [
      "Unlimited AI searches",
      "Premium beat access",
      "HD quality downloads",
      "Advanced recording booth",
      "Priority support",
      "Exclusive beats",
      "No watermarks",
    ],
    cta: "Start Free Trial",
    popular: true,
    color: "border-purple-500",
  },
  {
    name: "Studio",
    price: "$49",
    period: "per month",
    description: "For professional studios and labels",
    features: [
      "Everything in Pro",
      "Unlimited exclusive beats",
      "Commercial licensing",
      "API access",
      "White-label options",
      "Dedicated account manager",
      "Custom beat requests",
    ],
    cta: "Contact Sales",
    popular: false,
    color: "border-orange-500",
  },
]

export function PricingSection() {
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
          <Crown className="h-4 w-4" />
          Choose Your Plan
        </div>
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          Simple, Transparent
          <span className="block bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
            Pricing
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Start free and upgrade as you grow. Cancel anytime.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <PricingCard key={plan.name} plan={plan} index={index} />
        ))}
      </div>
    </section>
  )
}

function PricingCard({ plan, index }: { plan: (typeof plans)[number]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={plan.popular ? "md:-mt-4 md:mb-4" : ""}
    >
      <Card
        className={`relative h-full border-2 ${plan.color} ${plan.popular ? "bg-gradient-to-b from-purple-500/10 to-transparent" : ""}`}
      >
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <Badge className="bg-gradient-to-r from-purple-500 to-orange-500 px-4 py-1">
              <Sparkles className="mr-1 h-3 w-3" />
              Most Popular
            </Badge>
          </div>
        )}
        <div className="p-8">
          <div className="mb-4">
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className="text-sm text-muted-foreground">{plan.description}</p>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold">{plan.price}</span>
            <span className="text-muted-foreground">/{plan.period}</span>
          </div>
          <ul className="mb-8 space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600" : ""}`}
            variant={plan.popular ? "default" : "outline"}
          >
            {plan.cta}
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}


