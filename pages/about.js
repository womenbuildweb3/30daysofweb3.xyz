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
              <h1 className="mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mr-6 bg-clip-text text-transparent font-bold text-3xl md:text-5xl tracking-tight mr-80">
                About Me
              </h1>
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm md:text-lg display: inline-block">
                  I'm a software engineer, founder, and educator. I wear a lot
                  of hats as a professional, but my passion for equity and
                  access is what strings them all together. I'm originally from
                  Colombia and have been living in The Bay Area for more than 20
                  years. I graduated from San Leandro High School, and went on
                  to study computer science at a community college before
                  transferring to Cal State East Bay.
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm md:text-lg display: inline-block">
                  Growing up, I always wanted to be a teacher or a social
                  worker, or something along those lines. I have always been
                  passionate about social justice and equality. I learned about
                  coding in the 11th grade, and after struggling with feeling
                  like a traitor for being interested in technology after years
                  of wanting to work for social good. At the time, it felt like
                  these tech and social justice issues were mutually exclusive.
                  As a Bay Area native, I saw the devastating effects of
                  gentrifcation as a result of the tech industry. After learning
                  about the gender and racial equity issues in tech, and the
                  dangerous technology that gets created as a result, I realized
                  that being a woman, and being an immigrant, and being a
                  Latina, and being low-income and being in tech is an act of
                  social justice. I wanted to ensure that there were people like
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
                  I work as a developer advocate at PlanetScale, with a personal
                  mission to make working with databases a seamless and
                  enjoyable experience for developers. Prior to PlanetScale, I
                  worked at PayPal as an engineer on the Checkout team, and then
                  on the Developer Relations team. I create content for
                  PlanetScale, and on my personal channels. I especially love
                  creating content on Tik Tok, and you can find me on all social
                  channels @camiinthisthang.
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm md:text-lg display: inline-block">
                  You can check out my various projects and companies below
                </p>
              </div>
              <Companies />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
