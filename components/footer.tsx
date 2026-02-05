import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="font-serif text-xl font-medium text-foreground">
              Dr. Maya Reynolds, PsyD
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              Licensed Clinical Psychologist
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            <Link 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link 
              href="#specialties" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Specialties
            </Link>
            <Link 
              href="#approach" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              My Approach
            </Link>
            <Link 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Dr. Maya Reynolds. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            This website is for informational purposes only and does not constitute medical advice. 
            If you are in crisis, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.
          </p>
        </div>
      </div>
    </footer>
  )
}
