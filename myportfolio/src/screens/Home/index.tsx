import './styles.scss'

// Ignore ion-icon error

export const HomeScreen = () => {
    return (
        <section id="home">
            <h1 className="lg-heading">
                <span translate='no'>Arthur</span>
                <span className="text-secondary">Quinellato</span>
            </h1>
            <h2 className="sm-heading">
                FullStack Developer, Mobile Developer, Programmer & UX/UI
                Designer
            </h2>
            <div className="icons">
                <a href="https://instagram.com/arthur_qob" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                    href="https://linkedin.com/in/arthur-quinellato"
                    target="_blank"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/Arthur1802" target="_blank">
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
        </section>
    )
}

export default HomeScreen