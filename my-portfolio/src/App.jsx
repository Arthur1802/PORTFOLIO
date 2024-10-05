// import { useState } from 'react'
import './styles/App.css'
import About from './components/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
  // const [theme, setTheme] = useState(false)
  // document.querySelector('.App').attributes['data-theme'].value = `${theme ? 'dark' : 'light'}`
  
  return (
    <div className = "App">
      {/* <ThemeToggle
        isChecked = {theme}
        handleToggle = {setTheme(!theme)}
      /> */}

      <Navbar />

      <div className = "body">
        <About />
      </div>

      <Footer />
    </div>
  )
}

export default App