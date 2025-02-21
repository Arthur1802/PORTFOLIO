import { Routes, Route } from 'react-router-dom'

// Pages
import Home from './screens/Home/index.tsx'
import About from './screens/About/index.tsx'
import Projects from './screens/Projects/index.tsx'
import Contact from './screens/Contact/index.tsx'
// import { withTranslation } from 'react-google-multi-lang'

// const TranslatedHome = withTranslation(Home)
// const TranslatedAbout = withTranslation(About)
// const TranslatedProjects = withTranslation(Projects)
// const TranslatedContact = withTranslation(Contact)

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<TranslatedHome />} />
                <Route path="/about" element={<TranslatedAbout />} />
                <Route path="/projects" element={<TranslatedProjects />} />
                <Route path="/contact" element={<TranslatedContact />} /> */}

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}

export default AppRoutes