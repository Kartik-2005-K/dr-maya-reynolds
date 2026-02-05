export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            About Me
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
            Helping You Find Clarity & Connection
          </h2>
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Welcome. I&apos;m Dr. Maya Reynolds, a licensed clinical psychologist practicing in Austin, Texas. 
            I believe that therapy is a collaborative journey&mdash;one where you bring your experiences 
            and wisdom, and I bring my training and genuine care for your wellbeing.
          </p>
          
          <p>
            With over 15 years of clinical experience, I specialize in helping adults navigate anxiety, 
            depression, trauma, and significant life transitions. My approach integrates evidence-based 
            practices with a warm, person-centered style that honors your unique story and strengths.
          </p>

          <p>
            I earned my doctorate in Clinical Psychology from the University of Texas at Austin, where 
            I completed specialized training in cognitive-behavioral therapy and mindfulness-based 
            interventions. I&apos;ve since pursued additional certifications in EMDR therapy and 
            acceptance and commitment therapy (ACT).
          </p>

          <p>
            Outside of my practice, I find renewal in hiking the Texas Hill Country, practicing yoga, 
            and spending time with my rescue dog, Luna. I believe deeply in the importance of self-care 
            and bringing our whole, authentic selves to the work of healing.
          </p>
        </div>

        <div className="mt-12 pt-12 border-t border-border">
          <h3 className="font-serif text-xl font-medium text-foreground mb-6 text-center">
            Education & Credentials
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-foreground mb-3">Education</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>PsyD, Clinical Psychology &mdash; University of Texas at Austin</li>
                <li>MA, Psychology &mdash; University of Colorado Boulder</li>
                <li>BA, Psychology &mdash; Vanderbilt University</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-3">Certifications & Licensure</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Licensed Psychologist, State of Texas (#38472)</li>
                <li>EMDR Certified Therapist</li>
                <li>ACT Trained Clinician</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
