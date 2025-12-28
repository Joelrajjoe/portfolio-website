"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Terminal, Workflow } from "lucide-react"

const skillGroups = [
  {
    category: "Programming",
    icon: Terminal,
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "SQL", level: "Expert" },
      { name: "Java", level: "Intermediate" },
    ],
  },
  {
    category: "Analytics & Viz",
    icon: BarChart3,
    skills: [
      { name: "Power BI", level: "Advanced" },
      { name: "Tableau", level: "Advanced" },
      { name: "Excel", level: "Expert" },
      { name: "Jupyter", level: "Advanced" },
      { name: "Google Colab", level: "Advanced" },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: Workflow,
    skills: [
      { name: "VS Code", level: "Pro" },
      { name: "GitHub", level: "Advanced" },
      { name: "Git", level: "Advanced" },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto px-6 md:px-12 py-10 scroll-mt-24">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Expertise <span className="gradient-text">&</span> Tooling
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical arsenal, specialized in data engineering, AI development, and
            business intelligence.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIdx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full glass border-white/5 overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all">
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-chart-3 w-0 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_oklch(0.65_0.3_240)]" />
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]">
                    <group.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:bg-primary/20 hover:text-white hover:border-primary/50 transition-all duration-300 cursor-default"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
