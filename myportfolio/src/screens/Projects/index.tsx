import { useState } from 'react'
import './style.scss'

const ProjectsScreen = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleContent = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
    }

    const projects = [
        { title: "CS50's Finance Assignment", description: "One of the assignments in CS50 was to create a web application using Flask (python framework), SQL (relational database) and Jinja (python template engine) that would allow any authenticateed user to search, buy and sell stocks." },
        { title: "Task Tracker (Web)", description: "This was my CS50 final project. I had some inspiration by the Finance project and made a system very similar, but with a different mission. A task tracking web application that allows users to create, edit, delete and complete tasks." },
        { title: "Task Tracker (Mobile)", description: "As I advanced in my learning process in Mobile development, I took it upon myself to try to replicate my Task Tracker web application (made using Flask) into a mobile app. It is still under works but it has certainly been a fun challange. I've learned so much just by doing this project and I know I'm just scratching the surface." },
        { title: "Grocery List", description: "Problem solving is not only a pre-requisite for any programmer but also a very strong attribute of mine. As I started learning full-stack development, I decided to test my skills and abilities by solving an issue that I ran into. This grocery list project is meant to help my family organize their grocery needs/wants in one single shared place." },
        { title: "Banking System", description: "This is my attempt to make a personal banking system. Still working on it." },
    ]

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

                {projects.map((project, index) => (
                    <article key={index} className="card-wrapper">
                        <div className="card-img">
                            <span>PROJECT IMG HERE</span>
                        </div>
                        <h4 className="card-title">{project.title}</h4>
                        <div className={`toggler ${openIndex === index ? 'active' : ''}`} onClick={() => toggleContent(index)}>
                            <span>Click here to see more</span>
                        </div>
                        <section className={`card-content ${openIndex === index ? 'open' : 'closed'}`}>
                            <p className="project-description">{project.description}</p>
                        </section>
                    </article>
                ))}

            </div>
        </section >
    )
}

export default ProjectsScreen