import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
export default function About(){
    return (
        <div className={styles.container}>
            <Navbar />
            <main className='mt-11'>
                <div className='flex flex-col justify-center items-start max-w-5xl border-gray-200 dark:border-gray-700 mx-auto pb-16'>
                    <div className='flex flex-col-reverse sm:flex-row items-start'>
                        <div className='flex flex-col pr-8'>
                            <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
                                About Me
                            </h1>
                            <p className='text-gray-600 dark:text-gray-400 mb-2'>
                                I'm originally from Colombia, and I've lived in the Bay Area for most of my life. I studied computer science at Cal State East Bay in Hayward, CA, where I earned my bachelors degree after transferring from a community college. I'm currently working as a developer advocate at PlanetScale. Prior to that, I was a software engineer and dev rel engineer at PayPal. I've always wanted to be a teacher, and teaching is what I feel is my calling. Since I was a little kid, I would sit all of my teddy bears down and I would read to them, teach them how to write, etc. I discovered coding when I was 16 and a junior at San Leadnro High School after my history teacher offered us extra credit to complete Code.org's Hour of Code. I enjoyed it, but what really got me interested in computer science was the social justice and equality aspecty of women in computing. I always was passionate about social justice, and I realized that me being a Latina, first-generation, immigrant, woman pursing computer science was an act of social justice. I have since been extremely passionate about helping to make technology education more accessible. In 2018 I founded what has now come to be known as STEMTank, a nonprofit whose mission is to increase the nymber of Black and brown technologists and engineers. We offer free after-school and summer programs to low-income students in the Bay Area. Since 2018, we've served more than 300 students.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}