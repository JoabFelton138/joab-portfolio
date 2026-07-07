import './App.css'
import { About } from './components/About'
import { CareerHighlights } from './components/CareerHighlights'
import { Navbar } from './components/Navbar'
import { TechnicalSkills } from './components/TechnicalSkills'

function App() {

  return (
    <>
      <section>
        <Navbar />
        <About />
        <TechnicalSkills />
        <CareerHighlights />
      </section>
    </>
  )
}

export default App
