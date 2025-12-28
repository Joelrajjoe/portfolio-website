"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Send, MessageSquare } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="container mx-auto px-6 md:px-12 py-10 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side - Info */}
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <p className="text-primary font-mono text-sm tracking-widest uppercase">Connect</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              Let's Create <br />
              Something <span className="text-primary">Great.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mt-4">
              I'm always open to discussing data-driven projects, AI research opportunities, or technical
              collaborations.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            <a
              href="mailto:joelraj712@gmail.com"
              className="flex items-center gap-4 group p-4 glass rounded-2xl border-border/40 hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Email</p>
                <p className="font-bold">joelraj712@gmail.com</p>
              </div>
            </a>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/joelrajjoe"
                target="_blank"
                className="flex-1 flex items-center gap-4 group p-4 glass rounded-2xl border-border/40 hover:border-primary/50 transition-all"
                rel="noreferrer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="font-bold">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Joelrajjoe"
                target="_blank"
                className="flex-1 flex items-center gap-4 group p-4 glass rounded-2xl border-border/40 hover:border-primary/50 transition-all"
                rel="noreferrer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Github className="w-6 h-6" />
                </div>
                <span className="font-bold">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <Card className="glass border-border/40 p-4 md:p-8">
            <CardContent className="p-0 flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="text-primary w-5 h-5" />
                <h3 className="text-xl font-bold font-display">Send a message</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Name</label>
                  <Input placeholder="John Doe" className="bg-background/50 border-border/50 h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Email</label>
                  <Input placeholder="john@example.com" className="bg-background/50 border-border/50 h-12 rounded-xl" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Subject</label>
                <Input placeholder="Project Inquiry" className="bg-background/50 border-border/50 h-12 rounded-xl" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Message</label>
                <Textarea
                  placeholder="How can I help you?"
                  className="bg-background/50 border-border/50 min-h-[150px] rounded-xl"
                />
              </div>

              <Button
                size="lg"
                className="w-full h-14 rounded-xl font-bold text-lg gap-2 group shadow-xl shadow-primary/20"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
