import '../styles/components/Footer.css'

const Footer = () => {
    return (
        <footer>
            <table>
                <tr>
                    <td>
                        <h3 className = "font-semibold">Arthur Quinellato</h3>
                        <p className = "font-regular">
                            Você é uma agência ou um freelancer? Estou sempre aberto a novas oportunidades para trocar ideias e explorar colaborações.
                        </p>
                    </td>
                    <td>
                        <ul>
                            <li><a href = "#">Home</a></li>
                            <li><a href = "#">Sobre</a></li>
                            <li><a href = "#">Projetos</a></li>
                            <li><a href = "#">Contato</a></li>
                        </ul>
                    </td>
                    <td>
                        Telefone: +55 (21) 96523-6252
                        E-mail: arthur.quinellato@gmail.com
                    </td>
                </tr>
                <tr>
                    <td colSpan = "2">
                        <a href = "https://instagram.com/arthur_qob"><i className = "fa-brands fa-instagram"></i></a>
                        <a href = "https://linkedin.com/in/arthur-quinellato"><i className = "fa-brands fa-linkedin"></i></a>
                        <a href = "https://github.com/Arthur1802"><i className = "fa-brands fa-github"></i></a>
                    </td>
                    <td>
                        <p className = "legal-paragraph font-regular">
                            Copyright © 2024 Arthur Quinellato - Todos os Direitos Reservados • arthur.quinellato@gmail.com •
                            <a href = "#">Política de Privacidade</a>
                        </p>
                    </td>
                </tr>
            </table>
        </footer>
    )
}

export default Footer