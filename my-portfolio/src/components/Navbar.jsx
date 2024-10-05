import { useEffect, useRef } from 'react'
import '../styles/components/Navbar.css'

const Navbar = () => {
    const headerRef = useRef(null);
    const logoRef = useRef(null);
    const navLinksRef = useRef(null);

    useEffect(() => {
        const header = headerRef.current;
        const navbarLogo = logoRef.current;
        const navbar_links = navLinksRef.current;
        const navHeight = header.offsetHeight;

        const handleScroll = () => {
            if (window.scrollY > navHeight) {
                header.style.backdropFilter = 'blur(10px)';
                header.style.webkitBackdropFilter = 'blur(10px)';
                header.style.background = 'transparent';
                header.style.boxShadow = 'none';
                header.style.padding = '1rem 5rem';
                navbarLogo.style.transform = 'scale(1.25)';
                navbar_links.style.color = 'var(--primary-color)';
            } else {
                header.style.boxShadow = '0 5px 5px rgba(0, 0, 0, 0.1)';
                header.style.backdropFilter = 'none';
                header.style.webkitBackdropFilter = 'none';
                header.style.background = 'var(--primary-color)';
                header.style.height = '80px';
                header.style.padding = '1rem 4rem';
                navbarLogo.style.transform = 'scale(1)';
                navbar_links.style.color = 'var(--primary-text-color)';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header ref = {headerRef}>
            <nav>
                <div className = "navbar-logo" ref = {logoRef}>
                    A | Q
                    LOGO HERE
                </div>

                <ul className = "navbar-links" ref = {navLinksRef}>
                    <li><a href = "#">About</a></li>
                    <li><a href = "#">Projects</a></li>
                    <button className = "contact-link" href = "#">Contact</button>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;