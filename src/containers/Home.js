import * as react from 'react';

export default function Home(){
    return(
        <body>
            <aside class="menu">
                <section class="menu-content">
                    <h1>Luan</h1>
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
            <section class="presentation">
                <h1 id="Presentation">Hello, I'm Luan Henrique!</h1>
                <h2>FullStack Developer</h2>
                <p>Hi, I'm Luan - Junior FullStack Developer. Here you can learn a little more about me and you will see that my relationship with technology goes far beyond lines of code, 
                abstracting and solving problems is not just a job but it is my motivation, with this I have been making the ideas I dream come true.</p>
            </section>    
            <section id="Biography" class="biography">
                <h1>About me</h1>
                <p>My name is Luan Henrique. Technology has always been present in my life since my childhood as I have always liked games, whether on a console or on a computer. 
                    The codes came a little later in my life but upon first contact I was sure that this was my passion.<br />
                    <br />I am currently an intern at the Federal Council of Engineering and Agronomy, a federal body that controls and supervises the exercise of the profession of engineers and architects in Brazil, as a Web Developer, 
                    I work developing software, APIs, collaborating on large-scale projects, participating in the preparation and
                    validating software requirements, monitoring projects in production,acquiring practical knowledge about the software development life cycle and carrying out maintenance so that the professionals governed by this body have quality, safety and ease according to your needs. 
                    C#, .NET, .NET Core, ASP.NET, ASP.NET Core, SQL Server, GitLab, JavaScript and API in .NET Core have been used.
                </p>
            </section>  
            <section class="projects">
                <h1 id="Projects">Projects</h1>
            </section>
        </body>
    );
}