import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Specialties } from "@/components/specialties"
import { Approach } from "@/components/approach"
import { Office } from "@/components/office"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Specialties />
      <Approach />
      <Office />
      <Contact />
      <Footer />
    </main>
  )
}
