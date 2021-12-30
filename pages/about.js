import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
export default function About() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className="mt-11">
        <div className="flex flex-col justify-center items-start max-w-5xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
                <div className="flex flex-row">
                <h1 className="mb-4 bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-500 mr-6 bg-clip-text text-transparent font-bold text-3xl md:text-5xl tracking-tight mr-80">
                My Villain Origin Story 
              </h1>
              <h1>If you can read this, shh</h1>
                </div>
            
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-lg">
                  For as long as I can remember, I have always wanted to be a
                  teacher. My mom loves to tell the story about how I would sit
                  all of my teddy bears down facing a whiteboard, and would
                  stand up there and teach them. I never considered another
                  career, much less a career in STEM. While I was in high
                  school, my history class participated in Code.org’s Hour of
                  Code. This was my first experience ever hearing the term
                  “coding” and I was so impacted that I left the event
                  interested in computer science. Before I was able to write my
                  first line of code, I was met with the first barrier to entry.
                  Trying to sign up to take a CS class at my school was the
                  first time I was faced with the stark reality that, at a
                  structural level, it was more difficult for students attending
                  public high schools to choose a career in CS.
                  <br></br>
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-lg">
                  In a school of 2500+ students, in 11th grade, San Leandro High
                  School only had 60 seats available for AP computer science.
                  Because there were more interested students than there were
                  seats, these seats were assigned by lottery. Students who did
                  not get chosen would have to wait until the next academic year
                  to sign up again. I was not selected for a spot in the class,
                  and this impacted my ability to be competitive for college
                  admissions as a declared CS major. After experiencing these
                  barriers to entry, I saw an opportunity to solve a problem.
                  <br></br>
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-lg">
                  I knew I wanted to learn to code, but also wanted to help more
                  of us have access to quality computer science education.
                  Through this process, and I was able to reach a perfect
                  balance of teaching and coding and found my passion in
                  providing technology education for historically disadvantaged
                  students. While in community college pursuing my computer
                  science degree, I spent 1.5 years as the Technology
                  Coordinator for The Boys and Girls Clubs of San Leandro and
                  East Palo Alto where I designed a STEM career curriculum in
                  robotics, coding, and math for K-12 students. I wanted my
                  students to be able to imagine themselves as engineers,
                  mathematicians, scientists, and coders - something I had never
                  done despite being an average, middle-class child.
                  <br></br>
                </p>
              </div>

              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-lg">
                  In 2018 I founded what has now come to be known as 
                  <a target="_blank" href="https://www.stemtank.org/">
                  <span className="pl-1 font-semibold underline decoration-indigo-500"> STEMTank</span>
                  </a>
                   , a
                  nonprofit whose mission is to increase the number of Black and
                  brown technologists and engineers. The organization was first
                  born out of a desire to serve my home community of Oakland and
                  the East Bay, which also faces some of the most devastating
                  effects of gentrification largely caused by technology
                  companies and their employees. I hosted free one-off workshops
                  on topics like drones, the internet of things, and coding.
                  After a few months of this I wanted to measure my impact in a
                  real way and knew that I had to build something more
                  substantial to achieve my mission of increasing the number of
                  Black and brown technologists. I went on to design an
                  after-school program to expose students to the various careers
                  that exist within STEM, teach them technical skills, and
                  connect them with Black and brown people working in those
                  industries.
                  <br></br>
                </p>
              </div>

              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-lg">
                  My journey has taught me many things and forced me to wear
                  many hats- teacher, founder, hiring manager, mentor,
                  salesperson, but most importantly it taught me what it really
                  means to be a leader, both within my organization and my
                  community.
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
