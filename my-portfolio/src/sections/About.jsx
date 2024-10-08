import '../styles/sections/About.css'
import profile_img from '../assets/images/profile_img.jpg'

const About = () => {
    return (
        <section className = "about-section"> 
            <img className = "profile-img" src = {profile_img} alt = "Profile" />
            <p className = "about-text">
                Hi, I&apos;m Arthur! I&apos;m a passionate developer with a love for creating innovative solutions and exploring new technologies. Welcome to my portfolio where you can find some of the projects I&apos;ve been working on. Feel free to reach out if you&apos;d like to collaborate or just have a chat about tech!
            </p>
        </section>
    )
}

export default About