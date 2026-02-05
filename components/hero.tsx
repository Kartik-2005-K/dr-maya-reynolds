import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-nature.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <p className="text-sm md:text-base font-medium tracking-widest uppercase text-primary mb-4">
              Licensed Clinical Psychologist
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6 text-balance">
              Begin Your Journey Toward Healing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              I provide compassionate, evidence-based therapy to help you navigate 
              life&apos;s challenges and discover your path to wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide uppercase text-sm hover:bg-primary/90 transition-colors"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 border border-foreground text-foreground font-medium tracking-wide uppercase text-sm hover:bg-foreground hover:text-background transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem]">
              <Image
                src="/images/dr.png"
                alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
