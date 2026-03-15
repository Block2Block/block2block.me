import {Sidebar} from "./Sidebar.tsx";
import profile from '../src/assets/background.png';

export default function App() {

    return (
        <div>
            <Sidebar/>
            <main className="main-content">
                <section id="home" className="section-fh d-flex parallax"
                         style={{backgroundImage: 'url(\'' + profile + '\')'}}>
                    <div className={"m-auto text-center parallax-content"}>
                        <h1>Hi, I'm Ethan.</h1>
                        <p>I'm a Software Engineer currently working in C++ for Airline/Airport IT.</p>
                    </div>
                </section>
                <section id="about" className="section text-center">
                    <h1>About</h1>
                    <div className={"d-flex flex-wrap"}>
                        <div className="m-auto card">
                            <h2>Bio</h2>
                            <h3>
                                🏳️‍🌈 | He/Him<br/>
                                Buckinghamshire, UK
                            </h3>
                            <p>
                                I work in London but live in Buckinghamshire. I am working as a Software
                                Engineer, but have previous experience as a Shift Leader in retail, as well as a
                                customer assistant.
                                <br/><br/>
                                I know many programming languages, including Java, C++, Python, TypeScript, PhP, SQL,
                                and a selection of others. I have used many frameworks with these languages,
                                particularly in Java and TypeScript. I have used the Spring Boot framework to develop a
                                backend REST API, and the React framework to develop a frontend web applications. I have
                                used different databases such as MySQL, MongoDB, Oracle and Redis.
                                <br/><br/>
                                I am also familiar with many tools used in industry, such as Cloud technologies like
                                Docker, Kubernetes and Helm, as well as CI/CD tools like Jenkins. I am also very
                                familiar with Git, using it to host many of my projects.
                            </p>
                        </div>
                        <div className="m-auto card">
                            <h2>Hobbies</h2>
                            <div className={"d-flex"}>
                                <p className={"m-auto card-text"}>
                                    I love to play Video Games, particularly Minecraft. I love to play Mini-games, as
                                    well as get stuck into a Survival world. I was a Senior Moderator on the Mineplex
                                    network for over 5 years, from 2016-2021, on the Event Squad Team. We were
                                    responsible for creating and hosting engaging events for the community, and we also
                                    managed a team of Event Assistants who helped us host events.
                                    <br/><br/>
                                    I'm also a huge fan of board games and card games! I have a small collection of
                                    games that I love to play with friends. I love to play Monopoly and I also love
                                    playing UNO.
                                    <br/><br/>
                                    I'm also a huge fan of music, and you will catch my listening to music almost
                                    constantly. My preferred genre is Electronic, but I have been known to enjoy music
                                    from almost all genres. My Apple Music Replay 2025 came in at a total of 106,545
                                    minutes listened!
                                    <br/><br/>
                                    I am also an adrenaline-junkie, and love to go to theme parks and ride coasters! I
                                    have a Merlin Annual Pass, and love to take trips to Alton Towers and Thorpe Park.
                                    My favourite ride in the UK is Hyperia at Thorpe Park, but my favourite overall is
                                    Guardians of the Galaxy: Cosmic Rewind at Epcot in the US! I have gained 62
                                    coaster credits across 15 theme parks!
                                </p>
                            </div>
                        </div>
                        <div className="m-auto card">
                            <h2>Programming Languages/Databases</h2>
                            <p>
                                I know many different languages to a varying degree, however I have proficiency in Java
                                and TypeScript.
                                I have used many languages in personal projects across a selection of different use
                                cases. You can see a list of the
                                languages I am familiar with, along with my proficiency in each of them below:
                                <br/><br/>
                                <strong>Java:</strong> <i>Advanced</i><br/>
                                <strong>TypeScript:</strong> <i>Advanced</i><br/>
                                <strong>SQL:</strong> <i>Advanced</i><br/>
                                <strong>Python:</strong> <i>Advanced</i><br/>
                                <strong>C++:</strong> <i>Intermediate</i><br/>
                                <strong>PhP:</strong> <i>Intermediate</i><br/>
                                <strong>HTML/CSS:</strong> <i>Intermediate</i><br/>
                                <strong>Visual Basic:</strong> <i>Intermediate</i><br/>
                                <br/>
                                I am always developing my understanding of languages I already know, and I also love to
                                learn new ones! There are a selection of languages I wish to learn in the future, and
                                some of these include: C#, Kotlin, Rust, and others!
                                <br/><br/>
                                I am also familiar with a few database solutions, such as MongoDB, Oracle DB, MySQL,
                                SQLite, Postgres, and Redis. I have used these extensively in projects, learning the query
                                language syntax and how to interface with each of them.
                            </p>
                        </div>
                        <div className="m-auto card">
                            <h2>Tools and Frameworks</h2>
                            <p>
                                I am familiar with a wide variety of frameworks and tools. I use many different
                                frameworks in
                                my personal projects, and use many tools to help host them. Here are a few examples of
                                the frameworks/APIs
                                I've used in the past:<br/><br/>
                                <strong>Spring Boot:</strong> <i>Advanced</i><br/>
                                <strong>React:</strong> <i>Advanced</i><br/>
                                <strong>Angular:</strong> <i>Advanced</i><br/>
                                <strong>Spigot API:</strong> <i>Advanced</i><br/>
                                <strong>Java Discord API:</strong> <i>Intermediate</i><br/>
                                <strong>Minecraft Protocol/NMS:</strong> <i>Intermediate</i><br/>
                                <strong>Java Cryptography:</strong> <i>Basic</i><br/>
                                <strong>Django:</strong> <i>Basic</i><br/><br/>
                                I've also used many tools for development, including source control with Git, project
                                management with Jira, and CI/CD with Jenkins. I have used the Jenkins pipeline
                                extensively, writing my own pipeline scripts in Groovy.
                                I use Git to manage my projects source code and Jira to manage bugs and
                                developments.
                                <br/><br/>
                                I am also familiar with cloud technologies such as Docker, Kubernetes and Helm. One of
                                my projects is hosted using these technologies to allow me to better control
                                deployments, and make it easier to manage dependencies and the environment in which its
                                hosted.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="education-work" className="section text-center">
                    <h1>Education and Work</h1>
                    <div className={"d-flex flex-wrap"}>
                        <div className={"m-auto card"}>
                            <h2>Education</h2>
                            <p>Over the course of my education journey, I have gained 9 GCSE's, 3 A-Levels and a Masters Degree. I graduated with my
                                Masters Degree of Engineering in Computer Science/Software Engineering in 2023. I completed a variety of modules at university, including:<br/>
                                Programming in Java, Data Structures & Algorithms, Mathematical Foundations of
                                Computer Science, Logic & Computation, Software Engineering and Professional Practice,
                                Functional Programming, Systems Programming in C/C++, Security and Networks, Intelligent Robotics,
                                Advanced Networking, Mobile & Ubiquitous Computing.
                            </p>
                        </div>

                        <div className={"m-auto card"}>
                            <h2>Work</h2>
                            <p>I currently work as a Software Engineer I at a tech company specialising in Travel Tech.
                                I work in C++ as a Backend Engineer, working on bug fixes and proactive maintenance as well
                                as assisting in incident investigations and recovery.
                                I also work a lot on our internal tooling, working with Python and Angular to create
                                web applications that interface with our databases.</p>
                        </div>
                    </div>
                </section>
                <section id="projects" className="section text-center">
                    <h1>Projects</h1>
                    <div className={"d-flex flex-wrap"}>
                        <div className="m-auto card">
                            <h2>AuroraMC</h2>
                            <div className={"d-flex"}>
                                <p className={"m-auto card-text"}>
                                    AuroraMC was a passion project spanning over 5 years. It was a multi-server Minecraft
                                    mini-game network, with the aim of creating a fun and engaging gameplay experience.
                                    <br/><br/>
                                    I lead all technical sides of the network, including infrastructure, database management,
                                    plugin development and server administration. I also worked on the design and
                                    development of the games, including the gameplay mechanics, technical design
                                    and game implementation itself.
                                    <br/><br/>
                                    We implemented a fully-functional network with automatic deployments, a game engine,
                                    a custom command engine, database management systems and much more. We utilised many
                                    technologies and software to achieve this, including MySQL, Redis, Jenkins, GitHub,
                                    Maven, Java, PhP, JavaScript, and many more.
                                    <br/><br/>
                                    All of the plugins built off of the Spigot API, with some heavy modifications to the
                                    default behavior to customise everything to be how we wanted it to be. We also made
                                    some minor modifications to the Minecraft protocol to allow us to implement our own
                                    disguise and vanish system. The source code was over 100,000 lines of code, and
                                    consisted of 8 Minecraft plugins, 2 standalone Java applications, and 3 PhP/JavaScript
                                    web applications.
                                    <br/><br/>
                                    Some of the source code is now publicly archived, which you can view on GitHub.
                                    <br/><br/>
                                    <a href={"https://github.com/AuroraMC"}>
                                        <i className={"fa-brands fa-github"}/>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="m-auto card">
                            <h2>HubParkour</h2>
                            <p>
                                HubParkour is a free, open-source Minecraft Spigot plugin for use in Hub servers. It is
                                designed to be lightweight, easy to use and completely configurable. The project started
                                in 2017, but has received bugfix and feature updates over time.<br/><br/>
                                The plugin is built on the Spigot API, and has its own developer API so developers can
                                extend the capabilities of the plugin. The API is hosted in a Sonatype Nexus repository,
                                and can be used as a dependency in both Maven and Gradle.<br/><br/>
                                I actively offer support for the plugin via Discord, getting feedback from the community
                                and some of the suggestions have even made their way into the plugin! As an open-source
                                project, it's also open to contributions in the form of Pull Requests! We've had a few
                                contributions from community members in the past!<br/><br/>
                                The source code, Maven repository, support Discord, SpigotMC page, and JavaDocs can be found here:
                                <br/><br/>
                                <a href={"https://github.com/Block2Block/HubParkour"}>
                                    <i className={"fa-brands fa-github"}/>
                                </a>
                                <a href={"https://nexus.block2block.me/#browse/browse:HubParkour"}>
                                    <i className={"fa-solid fa-link"}/>
                                </a>
                                <a href={"https://discord.gg/PVdDNWs"}>
                                    <i className={"fa-brands fa-discord"}/>
                                </a>
                                <a href={"https://www.spigotmc.org/resources/hubparkour.47713/"}>
                                    <i className={"fa-solid fa-link"}/>
                                </a>
                                <a href={"https://hubparkour.block2block.me/"}>
                                    <i className={"fa-brands fa-java"}/>
                                </a>
                            </p>
                        </div>
                        <div className="m-auto card">
                            <h2>Misc other projects</h2>
                            <p>
                                I have done a variety of other projects throughout University and
                                in my spare time. Most of these projects are hosted publicly on my
                                GitHub profile.<br/><br/>
                                I have projects such as more Spigot plugins, some web development for
                                personal use, and other projects that I used as a learning experience.
                                <br/><br/>
                                You can view all of these projects on my GitHub:
                                <br/><br/>
                                <a href={"https://github.com/Block2Block"}>
                                    <i className={"fa-brands fa-github"}/>
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
