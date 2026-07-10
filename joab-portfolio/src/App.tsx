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
    <Navbar />
      <div className="bg-background">

        <About />
      </div>
      <div className="bg-gradient-to-b from-background via-secondary to-transparent">
        <TechnicalSkills />
        <CareerHighlightsAndRecommendation />
      </div>
      <Projects />
      <Footer />
    </>
  )
}

export default App
