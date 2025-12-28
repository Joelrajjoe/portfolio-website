export default function Footer() {
  return (
    <footer className="container mx-auto px-6 md:px-12 py-12 border-t border-border/40">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-2xl font-display font-bold tracking-tighter">
            JOELRAJ <span className="text-primary">.</span>
          </p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Joelraj J. All rights reserved.</p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Hire Me
          </a>
        </div>
      </div>
    </footer>
  )
}
