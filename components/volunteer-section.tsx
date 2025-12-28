"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, ShieldCheck, Heart } from "lucide-react"

const activities = [
  { title: "Young Indians (Yi), CII – Puducherry", icon: Users },
  { title: "Yi Parliament 2.0 Participant", icon: ShieldCheck },
  { title: "Yi Bhishma Hunt Volunteer", icon: Heart },
]

export default function VolunteerSection() {
  return (
    <div className="flex flex-col gap-8 h-full">
      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-display font-bold text-foreground">
          Community <span className="gradient-text">Impact</span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-4">
        {activities.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-border/60 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 group">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg shadow-primary/20">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
