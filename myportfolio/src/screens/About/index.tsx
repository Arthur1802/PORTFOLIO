import './style.scss'

const AboutScreen = () => (
    <section id="about">
        <h1 className="lg-heading">
            <span>About</span>
            <span className="text-secondary">Me</span>
        </h1>

        <h2 className="sm-heading">Here are some things about me...</h2>

        <div className="about-info">
            <img src="./src/assets/img/portrait.jpg" alt="Arthur Quinellato" className="bio-img" />

            <div className="bio">
                <h3 className="text-secondary">BIO</h3>
                <p>
                    Ever since I started taking the Information Systems course in college, I've grown more and more interested in what I could accomplish, what ideas I could make real, what real day-to-day problems I could resolve. It has become more than professional, it's my life, my hobby. I love what I do and I'm always looking for new things to learn and ways to perfect my skills.
                </p>
            </div>

            <div className="job job-1">
                <h3 translate='no'>Excom Assessoria Internacional</h3>
                <h6>Young Apprentice</h6>
                <p>During my time as a Young Apprentice, I assisted the IT department with daily tasks. I gained valuable knowledge in areas such as hardware basics, some Windows OS functionalities and configurations, as well as a bit of server management.</p>
            </div>
            <div className="job job-2">
                <h3 translate='no'>Asken Commercial</h3>
                <h6>Logistics Operator</h6>
                <p>In this role, I generate commercial documents for international trade and manage clients' virtual inventory. Although this position doesn't involve programming, I have utilized my knowledge and skills to develop automations that assist me, making my work easier, faster, and more efficient.</p>
            </div>
        </div>
    </section>
)

export default AboutScreen
