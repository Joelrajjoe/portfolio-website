"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    role: "Data Analytics Trainee",
    company: "MedTourEasy",
    period: "Feb 2024 – Mar 2024",
    location: "Remote",
    highlights: [
      "Conducted analysis on healthcare datasets to identify trends in patient care.",
      "Developed interactive dashboards using Power BI to visualize key metrics.",
      "Performed data cleaning and preprocessing for predictive modeling tasks.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "UptoSkills",
    period: "Jan 2024 – Feb 2024",
    location: "Remote",
    highlights: [
      "Analyzed business data to provide insights for process optimization.",
      "Collaborated with cross-functional teams to define data requirements.",
      "Assisted in creating automated reporting systems using Python.",
    ],
  },
  {
    role: "AI Intern",
    company: "Edunet Foundation",
    period: "Oct 2023 – Nov 2023",
    location: "Remote",
    highlights: [
      "Explored various machine learning algorithms for image recognition.",
      "Built a prototype AI system for automated document classification.",
      "Participated in workshops on advanced deep learning techniques.",
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="container mx-auto px-6 md:px-12 py-10 scroll-mt-24">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <p className="gradient-text font-mono text-sm tracking-widest uppercase font-bold">Timeline</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-chart-3 md:-translate-x-1/2 hidden sm:block opacity-50" />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.role}-${idx}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 items-center ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-[-5px] md:left-1/2 top-0 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_oklch(0.55_0.25_240)] border-2 border-white z-20 hidden sm:block" />

              {/* Date for desktop */}
              <div
                className={`hidden md:flex w-full md:w-1/2 px-12 items-center ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <span className="gradient-text font-mono text-sm tracking-widest uppercase font-bold">
                  {exp.period}
                </span>
              </div>

              {/* Content Card */}
              <div className="w-full md:w-1/2">
                <Card className="glass border-border/60 hover:border-primary/50 transition-all duration-300 group overflow-hidden hover:shadow-2xl hover:shadow-primary/10">
                  <CardContent className="p-8">
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-display font-bold gradient-text">{exp.role}</h3>
                          <p className="font-semibold text-lg text-foreground">{exp.company}</p>
                        </div>
                        <Briefcase className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-medium">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mt-4">
                        {exp.highlights.map((point, pIdx) => (
                          <li key={pIdx} className="flex gap-3 text-muted-foreground leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
