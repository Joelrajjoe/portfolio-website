"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1 flex justify-center lg:justify-start"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/40 via-accent/40 to-chart-3/40 rounded-2xl blur-3xl z-0 animate-pulse" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 neon-border shadow-2xl shadow-primary/40 z-10">
              <Image
                src="/professional-headshot-grayscale.jpg"
                alt="Joelraj J"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                priority
              />
            </div>

            {/* Floating Stats or Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 glass p-4 rounded-xl z-20 hidden md:block shadow-xl border-white/10"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Based in</p>
              <p className="text-sm font-semibold text-white">India</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="gradient-text font-mono text-sm tracking-widest uppercase font-bold"
          >
            Hello there, nice to meet you. I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white"
          >
            Joelraj <span className="gradient-text">J</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 text-lg md:text-xl text-muted-foreground font-medium"
          >
            <span>Data Analyst</span>
            <span className="text-primary drop-shadow-[0_0_8px_oklch(0.65_0.3_240)]">•</span>
            <span>AI Enthusiast</span>
            <span className="text-accent drop-shadow-[0_0_8px_oklch(0.75_0.3_180)]">•</span>
            <span>Computer Science Engineer</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-lg text-muted-foreground leading-relaxed text-balance md:text-lg"
          >
            I transform raw data into meaningful insights and build AI-powered solutions that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Button
              size="lg"
              asChild
              className="rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-primary/40 glow-hover bg-primary hover:bg-primary/90"
            >
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full px-8 h-12 text-base font-semibold neon-border bg-black/40 hover:bg-black/60 text-white hover:shadow-lg hover:shadow-accent/40"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        // Gradient icon for scroll indicator
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/40 hidden md:block"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  )
}
