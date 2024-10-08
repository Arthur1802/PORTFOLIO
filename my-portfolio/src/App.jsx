// import { useState } from 'react'
import './styles/App.css'
import About from './sections/About'
import Footer from './sections/Footer'
import Navbar from './sections/Navbar'

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