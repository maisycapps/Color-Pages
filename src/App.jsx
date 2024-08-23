import './App.css'
import { Route, Routes} from 'react-router-dom'
// NAV BAR
import Nav from './components/Nav'

// FOOTER
import Footer from './components/Footer'

// HOME
import Home from './components/Home'

// PRIMARIES
import Primaries from './components/Primaries'
import Blue from './components/Blue'
import Red from './components/Red'
import Yellow from './components/Yellow'
// SECONDARIES
import Secondaries from './components/Secondaries'
import Orange from './components/Orange'
import Green from './components/Green'
import Purple from './components/Purple'

function App() {

  return (
    <>
    <div id="container">
      
      {/* NAV BAR */}
      <Nav />

      <div id="main-section">

        {/* HOME */}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

        {/* PRIMARIES */}
        <Routes>
          <Route path='/primaries' element={<Primaries />}/>
          <Route path="/blue" element={<Blue/>} />
          <Route path="/red" element={<Red />} />
          <Route path="/yellow" element={<Yellow />} />
        </Routes>

        {/* SECONDARIES */}
        <Routes>
          <Route path='/secondaries' element={<Secondaries />}/>
          <Route path="/orange" element={<Orange />} />
          <Route path="/green" element={<Green />} />
          <Route path="/purple" element={<Purple />} />
        </Routes>

      </div>

      {/* FOOTER */}
      <Footer />

    </div>
    </>
  )
}

export default App
