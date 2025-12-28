"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Cpu, Code2, Globe } from "lucide-react"

export default function AboutSection() {
  const highlights = [
    { icon: Database, label: "Data Analytics" },
    { icon: Cpu, label: "AI & ML" },
    { icon: Code2, label: "Problem Solving" },
    { icon: Globe, label: "Project Exposure" },
  ]

  return (
    <section id="about" className="container mx-auto px-6 md:px-12 py-10 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Engineering <span className="gradient-text">Insights</span> From Information.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                I am a dedicated Computer Science Engineer with a deep passion for unlocking the stories hidden within
                data. My journey is defined by a blend of technical rigor and creative problem-solving.
              </p>
              <p>
                With a strong foundation in Data Analytics and a growing expertise in Artificial Intelligence, I focus
                on bridging the gap between raw data and actionable business intelligence. I thrive in environments that
                challenge me to build intelligent systems that can learn, adapt, and provide real-world value.
              </p>
              <p>
                Through various internships and real-world project exposure, I have honed my ability to analyze complex
                datasets, develop predictive models, and communicate findings effectively to stakeholders.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass border-border/60 hover:border-primary/50 transition-all glow-hover group">
                  <CardContent className="p-6 flex flex-col items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-semibold tracking-tight text-foreground">{item.label}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
