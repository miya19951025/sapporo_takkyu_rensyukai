import Hero from "@/components/hero"
import PracticeInfo from "@/components/practice-info"
import TournamentInfo from "@/components/tournament-info"
import Organizer from "@/components/organizer"
import Contact from "@/components/contact"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <PracticeInfo />
        <TournamentInfo />
        <Organizer />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

