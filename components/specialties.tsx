import { Heart, Brain, Sparkles, Users, Leaf, Sun } from "lucide-react"

const specialties = [
  {
    icon: Brain,
    title: "Anxiety & Stress",
    description: "Learn to manage overwhelming worry, panic, and chronic stress through proven therapeutic techniques.",
  },
  {
    icon: Heart,
    title: "Depression",
    description: "Find hope and reconnect with joy through compassionate support and evidence-based interventions.",
  },
  {
    icon: Sparkles,
    title: "Trauma & PTSD",
    description: "Process difficult experiences and reclaim your sense of safety using EMDR and trauma-informed care.",
  },
  {
    icon: Users,
    title: "Relationship Issues",
    description: "Improve communication, set healthy boundaries, and build more fulfilling connections with others.",
  },
  {
    icon: Leaf,
    title: "Life Transitions",
    description: "Navigate major changes like career shifts, divorce, loss, or parenthood with clarity and resilience.",
  },
  {
    icon: Sun,
    title: "Self-Esteem & Identity",
    description: "Develop greater self-compassion, confidence, and a stronger sense of who you authentically are.",
  },
]

export function Specialties() {
  return (
    <section id="specialties" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Areas of Focus
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
            Specialties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I work with adults facing a range of challenges. Whatever brings you to therapy, 
            I&apos;m here to meet you where you are.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty) => (
            <div
              key={specialty.title}
              className="p-8 bg-card border border-border hover:border-primary/30 transition-colors group"
            >
              <specialty.icon className="h-8 w-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {specialty.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
