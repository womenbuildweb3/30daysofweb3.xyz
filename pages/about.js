import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Companies from "../components/Companies";


export default function About() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className="mt-11">
        <div className="mb-4 flex flex-col justify-center items-start max-w-5xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className=" flex bg-black flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="mb-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mr-6 bg-clip-text text-transparent font-bold text-3xl md:text-5xl tracking-tight mr-80">
                About Me
              </h1>
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm md:text-lg display: inline-block">
                  Hi there! My name is Camila Ramos, and I go by Cami. I'm 23 years old and originally from
                  Bogota, Colombia. I have been living in The Bay Area for more than 20
                  years and I currently reside in Oakland, CA. I'm a surfer and traveler, and have been to 12 countries so far. 
                  I studied computer science at a community college before
                  transferring to Cal State East Bay. I graduated from CSUEB Decmeber 2021 
                  with a B.S. in Computer Science. 
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm md:text-lg display: inline-block">
                  I'm a software engineer, founder, and educator. I wear a lot
                  of hats as a professional, but my passion for equity and
                  access is what ties them all together. I'm the technical cofounder of 
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.calibaba.com/"
                  >
                    <span className="pl-1 font-semibold underline decoration-indigo-500 text-sm md:text-lg">
                      {" "}
                      Calibaba
                    </span>
                  </a>, 
                  a cannabis lifestyle and membership club, and the founder of
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.stemtank.org/"
                  >
                    <span className="pl-1 font-semibold underline decoration-indigo-500 text-sm md:text-lg">
                      {" "}
                      STEMTank
                    </span>
                  </a>, 
                  a Bay Area nonprofit that offers free STEM classes for kids 8-18.
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm md:text-lg display: inline-block">
                  Growing up, I always wanted to be a teacher or a social
                  worker, or something along those lines. I wanted to work in a field where I could
                  help disadvantaged people through education and support services. I first learned about
                  coding in the 11th grade and after becoming interested in it, I 
                   struggled  with feeling like a traitor for being interested in 
                  technology after years of wanting to work for social good. At the time, it felt like
                  tech and social justice were mutually exclusive.
                  As a Bay Area native, I saw the devastating effects of
                  gentrification as a result of the tech industry and generally had negative feelings about tech.
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm md:text-lg display: inline-block">
                  After learning about the gender and racial equity issues in tech, and the
                  dangerous technology that gets created as a result, I realized
                  that being a woman, an immigrant, a
                  Latina, and from a low-income background that being in tech is an act of
                  social justice in and of itself. I wanted to ensure that there were people like
                  me in the room making decisions to ensure technology that is
                  safe and equitable for all. I got my start in the tech and
                  education while in community college where I started teaching
                  K-12 students how to code as the Technology Coordinator for
                  Boys and Girls Clubs in the Bay Area. in 2018, I founded
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.stemtank.org/"
                  >
                    <span className="pl-1 font-semibold underline decoration-indigo-500 text-sm md:text-lg">
                      {" "}
                      STEMTank
                    </span>
                  </a>
                  , a non-profit whose mission is to increase the number of
                  Black and brown technologists and engineers. We offer free
                  after-school and summer classes for students 8-18, and we have
                  served more than 300 students to date.
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm md:text-lg display: inline-block">
                  I work as a developer advocate at 
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.planetscale.com/"
                  >
                    <span className="pl-1 font-semibold underline decoration-indigo-500 text-sm md:text-lg">
                      {" "}
                      PlanetScale
                    </span>
                  </a> , with a personal
                  mission to make working with databases a seamless and
                  enjoyable experience for developers. Prior to PlanetScale, I
                  worked at PayPal as an engineer on the Checkout team, and then
                  on the Developer Relations team. I create content for
                  PlanetScale, and on my personal channels. I especially love
                  creating content on Tik Tok, and you can find me on all social
                  channels 
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.twitter.com/camiinthisthang/"
                  >
                    <span className="pl-1 font-semibold underline decoration-indigo-500 text-sm md:text-lg">
                      {" "}
                      @camiinthisthang
                    </span>
                  </a>
                  .
                </p>
              </div>
              {/* <Companies /> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
