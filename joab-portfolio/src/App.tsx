import './App.css'
import { About } from './components/About'
import { CareerHighlightsAndRecommendation } from './components/career-highlights-and-recommendation/CareerHighlightsAndRecommendation'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Projects } from './components/projects/Projects'
import { TechnicalSkills } from './components/technical-skills/TechnicalSkills'

function App() {

  return (
    <>
      <section>
        <Navbar />
        <About />
        <TechnicalSkills />
        <CareerHighlightsAndRecommendation />
        <Projects />
        <Footer />
      </section>
    </>
  )
}

export default App
