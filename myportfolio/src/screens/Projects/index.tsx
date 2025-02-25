import { useEffect, useRef } from 'react'
import './style.scss'

const ProjectsScreen = () => {
    const detailsElements = useRef<NodeListOf<HTMLDetailsElement>>(null)

    useEffect(() => {
        detailsElements.current = document.querySelectorAll("details.card-content")

        detailsElements.current.forEach((details) => {
            details.addEventListener("toggle", function () {
                if (this.open) {
                    detailsElements.current?.forEach((otherDetails) => {
                        if (otherDetails !== this && otherDetails.open) {
                            otherDetails.removeAttribute("open")
                        }
                    })
                }
            })
        })
    }, [])

    return (
        <section id="projects">
            <h1 className="lg-heading">
                <span>My</span>
                <span className="text-secondary">Projects</span>
            </h1>
            <h2 className="sm-heading">
                Feel free to go around and take a look at each of my projects.
            </h2>

            <div className="projects-container">

                <article className="card-wrapper">
                    <div className="card-img">
                        <span>PROJECT IMG HERE</span>
                    </div>
                    <h4 className="card-title">CS50's Final Project</h4>
                    <details className="card-content">
                        <summary>
                            <span>
                                <i className="fa-solid fa-chevron-right"></i>
                                <span>Click here to see more</span>
                            </span>
                        </summary>
                        <p className="project-description">
                            I completed the CS50: Introduction to Computer Science by Harvard and, in order to "gradutate" I had to complete the final project.
                        </p>
                    </details>
                </article>

                <article className="card-wrapper">
                    <div className="card-img">
                        <span>PROJECT IMG HERE</span>
                    </div>
                    <h4 className="card-title">Task Tracker (Web)</h4>
                    <details className="card-content">
                        <summary>
                            <span>
                                <i className="fa-solid fa-chevron-right"></i>
                                <span>Click here to see more</span>
                            </span>
                        </summary>
                        <p className="project-description"></p>
                    </details>
                </article>

                <article className="card-wrapper">
                    <div className="card-img">
                        <span>PROJECT IMG HERE</span>
                    </div>
                    <h4 className="card-title">Task Tracker (Mobile)</h4>
                    <details className="card-content">
                        <summary>
                            <span>
                                <i className="fa-solid fa-chevron-right"></i>
                                <span>Click here to see more</span>
                            </span>
                        </summary>
                        <p className="project-description"></p>
                    </details>
                </article>

                <article className="card-wrapper">
                    <div className="card-img">
                        <span>PROJECT IMG HERE</span>
                    </div>
                    <h4 className="card-title">Grocery List</h4>
                    <details className="card-content">
                        <summary>
                            <span>
                                <i className="fa-solid fa-chevron-right"></i>
                                <span>Click here to see more</span>
                            </span>
                        </summary>
                        <p className="project-description"></p>
                    </details>
                </article>

            </div>
        </section >
    )
}

export default ProjectsScreen