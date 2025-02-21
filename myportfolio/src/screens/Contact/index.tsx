import { useEffect, useRef } from 'react'
import './stye.scss'

export const ContactScreen = () => {
    const inputs = useRef<NodeListOf<HTMLInputElement> | null>(null)
    const labels = useRef<NodeListOf<HTMLLabelElement> | null>(null)

    useEffect(() => {
        inputs.current = document.querySelectorAll('input')
        labels.current = document.querySelectorAll('label')

        if (inputs.current && labels.current) {
            inputs.current.forEach((input, index) => {
                const label = labels.current?.[index]
                if (label) {
                    const labelWidth = label.clientWidth
                    input.style.width = `calc(100% - ${labelWidth + 10}px)`
                }
            })
        }
    }, [])

    return (
        <section id="contact">
            <h1 className="lg-heading">
                <span>Contact</span>
                <span className="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">
                <span
                >Feel free to explore my projects and reach out if you’d
                    like to collaborate or chat about tech!
                </span>
            </h2>
            <form id="contact-form">
                <div className="names">
                    <div className="input-boxes">
                        <label htmlFor="user_name">First name:</label>
                        <input
                            type="text"
                            name="user_name"
                            id="user_name"
                            placeholder="Jonh"
                            required
                        />
                    </div>
                    <div className="input-boxes">
                        <label htmlFor="user_name">Last name:</label>
                        <input
                            type="text"
                            name="user_name"
                            id="user_name"
                            placeholder="Doe"
                            required
                        />
                    </div>
                </div>

                <div className="input-boxes">
                    <label htmlFor="user_email">Email:</label>
                    <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        placeholder="your.email@example.com"
                        required
                    />
                </div>

                <div className="input-boxes" id="textarea">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        id="message"
                        required
                    ></textarea>
                </div>

                <div className="btns">
                    <button type="submit">Send</button>
                    <button type="reset">Clear</button>
                </div>
            </form>
            <p id="status-message"></p>
            <div className="form-wrapper">
            </div>
        </section>
    )
}

export default ContactScreen