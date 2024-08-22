import * as react from 'react';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home(){
    return(
        
        <body>
            <aside class="menu">
                <section class="menu-content">
                    <h1>LH</h1>
                    <nav>
                        <ul>
                            <li><a href="#Presentation">Presentation</a></li>
                            <li><a href="#Biography">Biography</a></li>
                            <li><a href="#Projects">Projects</a></li>
                            <li><a href="#">Contacts</a></li>
                        </ul>
                    </nav>
                </section>
            </aside>
            <section class="presentation"id="Presentation">
                <h1 >Hello, I'm Luan Henrique!</h1>
                <h2>FullStack Developer</h2>
                <p>I'm passionate about technology, with a hyperfocus on code development. My journey started in college with simple problems that easily took my full attention. Over time, I improved my skills as a FullStack Web Developer at the Federal Council of Engineering and Agronomy, 
                    with challenging and innovative projects. Every day that passes my passion increases and I am ready to gain even more experience.</p>
            </section>    
            <section id="Biography" class="biography">
                <h1>About me</h1>
                <p>I am a back-end developer, with extensive experience in .NET CORE, .NET Framework and ASP.NET CORE. 
                    I am determined to solve technical system problems, improving user usability, efficient performance and clean code.<br />
                <br/>I started my journey as a fullstack web developer, and I have always tried to constantly evolve and acquire as much knowledge as possible, facing new challenges and interacting with current technologies. 
                After 1 year and 7 months on this path, I build efficient and innovative applications with .NET Framework, .NET CORE, ASP.NET CORE and more.
                </p>
            </section>  
            <section class="projects">
                <h1 id="Projects">Projects</h1>
            </section>
        </body>
    );
}