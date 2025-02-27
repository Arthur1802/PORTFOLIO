import { useState } from 'react'
import './style.scss'

const ProjectsScreen = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleContent = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
    }

    const images = import.meta.glob('@/assets/projects/*.png', { eager: true })

    // Convert object keys into a more accessible mapping
    const imageMap: Record<string, string> = {}
    for (const path in images) {
        const filename = path.split('/').pop() // Extracts just "CS50-Finance.png"
        imageMap[filename!] = (images[path] as { default: string }).default // Stores filename -> image URL
    }

    const projects = [
        {
            title: "CS50's Finance Assignment",
            description: "One of the assignments in CS50 was to create a web application using Flask (python framework), SQL (relational database) and Jinja (python template engine) that would allow any authenticated user to search, buy and sell stocks.",
            img: imageMap['CS50-Finance.png']
        },
        {
            title: "Task Tracker (Web)",
            description: "This was my CS50 final project. I had some inspiration from the Finance project and made a system very similar, but with a different mission. A task tracking web application that allows users to create, edit, delete and complete tasks.",
            img: imageMap['Task-Tracker-Web.png']
        },
        {
            title: "Task Tracker (Mobile)",
            description: "As I advanced in my learning process in Mobile development, I took it upon myself to try to replicate my Task Tracker web application (made using Flask) into a mobile app. It is still under works but it has certainly been a fun challenge. I've learned so much just by doing this project and I know I'm just scratching the surface.",
            img: imageMap['Task-Tracker-Mobile.png']
        },
        {
            title: "Grocery List",
            description: "Problem solving is not only a pre-requisite for any programmer but also a very strong attribute of mine. As I started learning full-stack development, I decided to test my skills and abilities by solving an issue that I ran into. This grocery list project is meant to help my family organize their grocery needs/wants in one single shared place.",
            img: imageMap['Grocery-List.png']
        },
        {
            title: "Banking System",
            description: "This is my attempt to make a personal banking system. Still working on it.",
            img: imageMap['Banking.png']
        }
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
                        <div className="card-img" style={{ backgroundImage: `url(${project.img})` }}></div>
                        <h4 className="card-title">{project.title}</h4>
                        <div className={`toggler ${openIndex === index ? 'active' : ''}`} onClick={() => toggleContent(index)}>
                            <span>Click here to see more</span>
                        </div>
                        <section className={`card-content ${openIndex === index ? 'open' : 'closed'}`}>
                            <p className="project-description">{project.description}</p>
                        </section>
                    </article>
                ))}

                <article className="link card-wrapper">
                    <h3>To see my other projects, click here</h3>
                </article>

            </div>
        </section >
    )
}

export default ProjectsScreen