import Image from "next/image"

export function Office() {
  return (
    <section id="office" className="py-20 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/therapy-office.jpg"
              alt="Warm and welcoming therapy office with comfortable seating and natural light"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              The Space
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
              Our Office
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                My office is designed to be a sanctuary&mdash;a calm, private space where you can 
                feel safe to explore, reflect, and heal. Located in the heart of Austin&apos;s 
                Clarksville neighborhood, the office offers easy parking and a welcoming atmosphere.
              </p>
              
              <p>
                Natural light, comfortable seating, and thoughtful touches create an environment 
                that feels less like a clinical setting and more like a peaceful retreat from 
                the busyness of everyday life.
              </p>

              <p>
                I also offer secure telehealth sessions for those who prefer the convenience of 
                meeting from home or who live elsewhere in Texas.
              </p>
            </div>

            <div className="mt-8 p-6 bg-background border border-border">
              <h3 className="font-serif text-lg font-medium text-foreground mb-4">
                Office Location
              </h3>
              <address className="not-italic text-muted-foreground space-y-1">
                <p>1205 West Lynn Street, Suite 200</p>
                <p>Austin, Texas 78703</p>
              </address>
              <p className="mt-4 text-sm text-muted-foreground">
                Free street parking available. The building is wheelchair accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
