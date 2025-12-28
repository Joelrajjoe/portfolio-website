"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Star } from "lucide-react"

const achievements = [
  {
    title: "3rd Place – CASTILO-25 Hackathon",
    desc: "Developed an AI-based system for social good under strict time constraints.",
    icon: Trophy,
  },
  {
    title: "TECH NEBULA – Ethos 2024",
    desc: "Recognition for technical innovation and excellence at IIT Guwahati event.",
    icon: Star,
  },
]

export default function AchievementsSection() {
  return (
    <div className="flex flex-col gap-8 h-full">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-display font-bold text-foreground">
          Key <span className="gradient-text">Achievements</span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-4">
        {achievements.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-border/60 hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/10 group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-lg shadow-accent/20">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
