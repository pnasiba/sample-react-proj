import "./App.css";
import img from "./img/img.jpg" 


function About() {
  return (
    <div className="About">
      <section id="about">
        <div className="container">
          <p className="about-text">About me</p>

          <div className="about-wrapper">
            <img src={img} alt="Hijab girl" />

            <div className="about-wrapper_text">
              <h1>Curious about me? Here you have it:</h1>

              <p>
                I'm a passionate, software engineer who specializes in Frontend
                development (React). I am very enthusiastic about bringing the
                technical and visual aspects of digital products to life. User
                experience, pixel perfect design, and writing clear, readable,
                highly performant code matters to me.
                <br></br>
                
                I began my journey as a web developer in 2023, and
                since then, I've continued to grow and evolve as a developer,
                taking on new challenges and learning the latest technologies
                along the way. Now, in my early sixties, 2 years after starting
                my web development journey, I'm building cutting-edge web
                applications using modern technologies such as Next.js,
                TypeScript, Nextjs, Tailwindcss, Astro and much more.
                <br></br>
                
                I am very much a progressive thinker and enjoy working
                on products end to end, from ideation all the way to
                development.

                <br></br>

                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Linked where I share tech-related bites and build in public, or
                you can follow me on{" "}
                <a href="https://github.com/pnasiba">GitHub</a>.
              </p>

              <p>Finally, some quick bits about me.</p>

              <div className="detail">
                <ul className="detail-list">
                  <li>B.E. in Computer Engineering</li>
                  <li>Leadership</li>
                </ul>
                <ul className="detail-list">
                  <li>Full time coding</li>
                  <li>Project managment</li>
                </ul>
              </div>

              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
