import { useState, useRef, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
// import LanguageSelector from '@/components/LanguageSelector/LanguageSelector'
import AppRoutes from '@/AppRoutes'
import './style.scss'
import Myimg from '@/components/MyImg/myimg'

const App = () => {
    const [isOpen, setIsOpen] = useState(false)

    const menuBtnRef = useRef<HTMLDivElement>(null)
    const portraitRef = useRef<HTMLDivElement>(null)
    const menuNavRef = useRef<HTMLUListElement>(null)

    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
    }

    const location = useLocation()

    useEffect(() => {
        if (menuBtnRef.current && portraitRef.current && menuNavRef.current) {
            if (isOpen) {
                menuBtnRef.current.classList.add('close')
                portraitRef.current.classList.add('show')
                menuNavRef.current.classList.add('show')
            } else {
                menuBtnRef.current.classList.remove('close')
                portraitRef.current.classList.remove('show')
                menuNavRef.current.classList.remove('show')
            }
        }
    }, [isOpen])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    return (
        <main>
            <div className="menu-btn" ref={menuBtnRef} onClick={toggleMenu}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>

            <div className="portrait" ref={portraitRef}>
                <Myimg />
            </div>

            <ul className="menu-nav" ref={menuNavRef}>
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">About Me</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects" className="nav-link">My Work</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">How To Reach Me</NavLink>
                </li>
                {/* <li className="nav-item">
                    <LanguageSelector />
                </li> */}
            </ul>

            <AppRoutes />
        </main>
    )
}

export default App