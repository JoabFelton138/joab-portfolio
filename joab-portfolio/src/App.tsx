import './App.css'
import { About } from './components/About'
import { CareerHighlightsAndRecommendation } from './components/career-highlights-and-recommendation/CareerHighlightsAndRecommendation'
import { Navbar } from './components/Navbar'
import { TechnicalSkills } from './components/technical-skills/TechnicalSkills'

function App() {

  return (
    <>
      <section>
        <Navbar />
        <About />
        <TechnicalSkills />
        <CareerHighlightsAndRecommendation />
      </section>
    </>
  )
}

export default App
