import * as react from 'react';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Confea from '../images/Confea.png';
import Linkedin from '../images/linkedin.svg';
import GitHub from '../images/github.svg';
import Email from '../images/email.svg';
import Telephone from '../images/telephone.svg';

export default function Home() {
    return (

        <body>
            <aside class="menu">
                <section class="menu-content">
                    <h1>LH</h1>
                    <nav>
                        <ul>
                            <li><a href="#Presentation">Presentation</a></li>
                            <li><a href="#Biography">Biography</a></li>
                            <li><a href="#Experiences">Experiences</a></li>
                            <li><a href="#Skills">Skills</a></li>
                            <li><a href="#Contacts">Contacts</a></li>
                        </ul>
                    </nav>
                </section>
            </aside>
            <section class="presentation" id="Presentation">
                <h1 >Hello, I'm Luan Henrique!</h1>
                <h2>FullStack Developer</h2>
                <p>I'm passionate about technology, with a hyperfocus on code development. My journey started in college with simple problems that easily took my full attention. Over time, I improved my skills as a FullStack Web Developer at the Federal Council of Engineering and Agronomy,
                    with challenging and innovative projects. Every day that passes my passion increases and I am ready to gain even more experience.</p>
            </section>
            <section id="Biography" class="biography">
                <h1>About me</h1>
                <p>I am a back-end developer, with extensive experience in .NET CORE, .NET Framework and ASP.NET CORE.
                    I am determined to solve technical system problems, improving user usability, efficient performance and clean code.<br />
                    <br />I started my journey as a fullstack web developer, and I have always tried to constantly evolve and acquire as much knowledge as possible, facing new challenges and interacting with current technologies.
                    After 1 year and 7 months on this path, I build efficient and innovative applications with .NET Framework, .NET CORE, ASP.NET CORE and more.
                </p>
                <div>
                    <p>You can find a little more about me on this platform: </p>
                    <a href="https://github.com/Luanh03" target="_blank"><img src={GitHub} /></a>
                    <a href="https://www.linkedin.com/in/luan-henrique-47ab98254/" target="_blank"><img src={Linkedin} /></a>
                </div>
            </section>
            <section class="experiences">
                <h1 id="Experiences">Experiences</h1>
                <div class="divExp">
                    <div class="divExpImg">
                        <img src={Confea} />
                    </div>
                    <div class="divExpText">
                        <h3>Estágio em Desenvolvimento FullStack</h3>
                        <ul>
                            <li>Atuei como desenvolvedor FullStack (C#)</li>
                            <li>.NET Core</li>
                            <li>.NET Framework</li>
                            <li>ASP .NET Core</li>
                            <li>SQL Server</li>
                            <li>Entity Framework</li>
                            <li>API REST</li>
                        </ul>
                    </div>
                    <div class="divExpDate">
                        <p>Maio 2023 - moment</p>
                    </div>
                </div>
            </section>
            <section class="skills">
                <h1 id="Skills">Skills</h1>
            </section>               
            <section class="contacts">
                <h1 id="Contacts">Contacts</h1>
                <div class="divLinkContacts">
                    <p>If you're looking for a developer, have questions, or just want to connect, feel free to get in touch.</p>
                    <a href="mailto:luanhcosta03@outlook.com">
                        <img src={Email} />luanhcosta03@outlook.com
                    </a>
                    <a href="tel:+5561993152107">
                        <img src={Telephone} />+55 61993152107
                    </a>
                    <p><br />If you prefer, you can find me on these platforms!</p>
                </div>
                <div class="divFooterContacts">
                    <a href="https://github.com/Luanh03" target="_blank"><img src={GitHub} /></a>
                    <a href="https://www.linkedin.com/in/luan-henrique-47ab98254/" target="_blank"><img src={Linkedin} /></a>
                </div>
            </section>
        </body>
    );
}