import './App.css'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { TechnicalSkills } from './components/TechnicalSkills'

function App() {

  return (
    <>
      <section>
        <Navbar />
        <About />
        <TechnicalSkills />
      </section>
    </>
  )
}

export default App
