"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BadgeCheck, ExternalLink, Award } from "lucide-react"

const certifications = [
  {
    title: "OCI 2025 AI Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    date: "2025",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=48F8A57A9D090E5E17C74A16BAB471BE634AB3C67FDDF061B89192F191D12195",
    verified: true,
  },
  {
    title: "Data Analysis Using Python",
    issuer: "IBM",
    date: "2024",
    link: "https://www.credly.com/badges/804aefb9-b158-447f-ba1e-fa7ae1b75880/public_url",
    verified: true,
  },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="container mx-auto px-6 md:px-12 py-10 scroll-mt-24">
      <div className="flex flex-col gap-6 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="gradient-text font-mono text-sm tracking-widest uppercase font-bold">Credentials</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Certifications <span className="gradient-text">&</span> Badges
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-border/60 hover:border-primary/50 transition-all glow-hover group h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Award className="w-6 h-6" />
                  </div>
                  {cert.verified && <BadgeCheck className="w-6 h-6 text-accent animate-pulse" />}
                </div>

                <h3 className="text-xl font-display font-bold mb-2 group-hover:gradient-text transition-all">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground font-medium mb-6">
                  {cert.issuer} • {cert.date}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors"
                >
                  Verify Certificate
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
