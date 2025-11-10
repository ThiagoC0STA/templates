"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TESTIMONIALS } from "@/lib/mock-data"

export function TestimonialsSection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
          <Star className="h-4 w-4" />
          Trusted by Artists Worldwide
        </div>
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          What Artists Are
          <span className="block bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
            Saying About Us
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Join thousands of satisfied artists who found their perfect beats on TriuneBeats
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  )
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number]
  index: number
}) {
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
    >
      <Card className="relative h-full border-border/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-lg">
        <Quote className="absolute right-4 top-4 h-8 w-8 text-purple-500/20" />
        <div className="relative">
          <div className="mb-4 flex items-center gap-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="mb-6 text-muted-foreground">"{testimonial.text}"</p>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={testimonial.avatar} />
              <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.username}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

