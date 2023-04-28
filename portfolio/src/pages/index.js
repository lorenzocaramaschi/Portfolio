import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import Image from "next/image";
import loloFace from "../../public/favicon.ico";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");

  return (
    <div className={darkMode ? "dark" : ""}>
      {language === "EN" ? (
        <>
          <Head>
            <title>Lorenzo Caramaschi Portfolio</title>
            <meta
              name="description"
              content="Lorenzo Caramaschi's portfolio!"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="bg-white px-10 font-poppins md:px-20 lg:px-40 dark:bg-black">
            <section className="min-h-screen">
              <nav className="py-10 mb-12 flex justify-between">
                <h1 className="text-s font-bold dark:text-white">
                  Developed by Lorenzo Caramaschi
                </h1>
                <ul className="flex items-center">
                  <li
                    className="font-bold text-m mx-3 cursor-pointer dark:text-white"
                    onClick={() => language === "EN" ? language === setLanguage("ES") : setLanguage("EN")}
                  >
                    {language}
                  </li>
                  <li>
                    <BsFillMoonStarsFill
                      onClick={() => setDarkMode(!darkMode)}
                      className="cursor-pointer text-2xl dark:text-white"
                    />
                  </li>
                  <li>
                    <a
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                      href="/CV-Lorenzo Caramaschi-Front-End Developer.pdf"
                      download="CV-Lorenzo Caramaschi-Front-End Developer.pdf"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="text-center p-10">
                <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
                  Lorenzo Caramaschi
                </h2>
                <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
                  Front-End Developer
                </h3>
                <p className="text-md py-5 laeding-8 text-gray-800 md: text-xl max-w-xl mx-auto dark:text-gray-400">
                  I am a very passionate person when it comes to tackling new
                  projects and have good interpersonal relationships. I always
                  seek a creative solution to the work I am assigned. Currently,
                  I am looking for my first job as a Frontend Developer
                </p>
              </div>
              <div className="text-5xl flex justify-center gap-8 py-3 text-black dark:text-teal-500">
                <a href="https://twitter.com/loluza_" target="_blank">
                  <AiFillTwitterCircle />
                </a>
                <a
                  href="https://www.linkedin.com/in/lorenzo-caramaschi-desarrollador-fullstack/"
                  target="_blank"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCh7VlBeelGrITY7AX5-veyg"
                  target="_blank"
                >
                  <AiFillYoutube />
                </a>
                <a href="https://github.com/lorenzocaramaschi" target="_blank">
                  <AiFillGithub />
                </a>
                <a href="mailto:caramaschilorenzo@gmail.com" target="_blank">
                  <AiFillMail />
                </a>
              </div>
              <div className="relative mx-auto bg-gradient-to-b from-teal-500 to-teal-950 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
                <Image src={loloFace} fill className="object-cover" />
              </div>
            </section>

            <section>
              <div>
                <h3 className="text-5xl font-bold py-1 dark:text-white">
                  My Goal
                </h3>
                <p className="text-md py-5 laeding-8 text-gray-800  dark:text-gray-400">
                  My personal goal is to grow and develop as a{" "}
                  <span className="text-teal-500">Front-End Developer </span>
                  and learn to work with the widest possible variety of
                  languages and libraries, in order to carry out projects in the
                  best and most optimal way possible. On the other hand, I hope
                  to acquire experience in this field and then be able to pass
                  it on to more people
                </p>
              </div>
              <div className="lg:grid grid-cols-3 grid-flow-row">
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-teal-500">
                  <Image />
                  <h3 className="text-3xl font-bold pt-8 pb-2 dark:text-white">
                    Education
                  </h3>
                  <div className="mb-5">
                    <h4 className=" text-xl py-1 text-teal-600">
                      Faculty of Art, Design and Urbanism of Buenos Aires
                    </h4>
                    <h5 className="text-gray-800 py-1  dark:text-gray-400">
                      Graphic Design, <strong>2019-2019</strong>
                    </h5>
                    <p className="text-gray-500 py-1 dark:text-gray-300">
                      Learned to use <strong>Illustrator</strong>
                    </p>
                  </div>
                  <div className="mb-5">
                    <h4 className=" text-xl py-1 text-teal-600">
                      Da Vinci School
                    </h4>
                    <h5 className="text-gray-800 py-1  dark:text-gray-400">
                      Videogame designer and programmer,{" "}
                      <strong>2020-2022</strong>
                    </h5>
                    <p className="text-gray-500 py-1 dark:text-gray-300">
                      I learned how to use <strong>Unity</strong> as game
                      engine,
                      <strong> Photoshop, ZBrush, Substance Painter</strong> and
                      a basic knowledge of <strong>C#</strong> oriented to
                      videogames
                    </p>
                  </div>
                  <div className="mb-5">
                    <h4 className=" text-xl py-1 text-teal-600">
                      University of Cambridge
                    </h4>
                    <h5 className="text-gray-800 py-1  dark:text-gray-400">
                      Certificate in Advanced English, <strong>2018</strong>
                    </h5>
                    <p className="text-gray-500 py-1 dark:text-gray-300">
                      Learned English and received the
                      <strong>
                        {" "}
                        Certificate in Advanced English (C1 Level)
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-teal-500">
                  <Image />
                  <h3 className="text-3xl font-bold pt-8 pb-2 dark:text-white">
                    Availability
                  </h3>
                  <h4 className=" text-xl py-4 text-teal-600">
                    Part-time/Full-time
                  </h4>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-teal-500">
                  <Image />
                  <h3 className="text-3xl font-bold pt-8 pb-2 dark:text-white">
                    Courses and Trainings
                  </h3>
                  <h4 className=" text-xl py-1 text-teal-600">Coderhouse</h4>
                  <h5 className="text-gray-800 py-1  dark:text-gray-400">
                    Full Stack Programming Course, <strong>2022-2023</strong>
                  </h5>
                  <p className="text-gray-500 py-1 dark:text-gray-300">
                    Developed projects with{" "}
                    <strong>
                      HTML5, CSS3, Javascript, React.js and MERN stack (Mongo,
                      Express, React, Node)
                    </strong>
                  </p>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-teal-500">
                  <Image />
                  <h3 className="text-3xl font-bold pt-8 pb-2 dark:text-white">
                    Skills
                  </h3>
                  <div className="grid grid-cols-2 grid-rows-2 gap-5">
                    <div className="flex flex-col">
                      <h4 className=" text-xl py-1 text-teal-600">Front-End</h4>
                      <ul>
                        <li className="dark:text-gray-400">HTML</li>
                        <li className="dark:text-gray-400">CSS</li>
                        <li className="dark:text-gray-400">Javascript</li>
                        <li className="dark:text-gray-400">React.js</li>
                        <li className="dark:text-gray-400">Next.js</li>
                        <li className="dark:text-gray-400">Bootstrap</li>
                        <li className="dark:text-gray-400">Material UI</li>
                        <li className="dark:text-gray-400">SASS</li>
                        <li className="dark:text-gray-400">Figma</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className=" text-xl py-1 text-teal-600">Back-End</h4>
                      <ul>
                        <li className="dark:text-gray-400">Node.js</li>
                        <li className="dark:text-gray-400">Express.js</li>
                        <li className="dark:text-gray-400">MongoDB</li>
                        <li className="dark:text-gray-400">MySQL</li>
                        <li className="dark:text-gray-400">Firebase</li>
                        <li className="dark:text-gray-400">Postman</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className=" text-xl py-1 text-teal-600">
                        Adobe Package
                      </h4>
                      <ul>
                        <li className="dark:text-gray-400">Photoshop</li>
                        <li className="dark:text-gray-400">Illustrator</li>
                        <li className="dark:text-gray-400">Premiere</li>
                        <li className="dark:text-gray-400">After Effects</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-teal-500">
                  <Image />
                  <h3 className="text-3xl font-bold pt-8 pb-2 dark:text-white">
                    Soft skills
                  </h3>
                  <ul>
                    <li className="dark:text-gray-400">Team work</li>
                    <li className="dark:text-gray-400">Creativity</li>
                    <li className="dark:text-gray-400">Empathy</li>
                    <li className="dark:text-gray-400">Motivation</li>
                    <li className="dark:text-gray-400">Organization</li>
                  </ul>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-teal-500">
                  <Image />
                  <h3 className="text-3xl font-bold pt-8 pb-2 dark:text-white">
                    Languages
                  </h3>
                  <h4 className=" text-xl py-1 text-teal-600">Spanish</h4>
                  <h5 className="text-gray-800 py-1  dark:text-gray-400">
                    Native
                  </h5>
                </div>
              </div>
            </section>
            <section>
              <div>
                <h3 className="text-5xl font-bold py-1 dark:text-white">
                  Portfolio
                </h3>
                <p className="text-md leading-8 text-gray-800 py-2 dark:text-gray-400">
                  These are the top projects i've done or that im working on!
                </p>
              </div>
              <div className="flex flex-col gap-10 py-10 lg:flex-wrap">
                <div className="basis-1/3 flex-1">
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="basis-1/3 flex-1">
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="basis-1/3 flex-1">
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
              </div>
            </section>
          </main>
        </>
      ) : (
        <>
          <Head>
            <title>Lorenzo Caramaschi Portafolio</title>
            <meta
              name="description"
              content="El portafolio de Lorenzo Caramaschi!"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="bg-white px-10 font-poppins md:px-20 lg:px-40 dark:bg-black">
            <section className="min-h-screen">
              <nav className="py-10 mb-12 flex justify-between">
                <h1 className="text-s font-bold dark:text-white">
                  Desarrolado por Lorenzo Caramaschi
                </h1>
                <ul className="flex items-center">
                  <li
                    className="font-bold text-m mx-3 cursor-pointer dark:text-white"
                    onClick={() => language === "EN" ? language === setLanguage("ES") : setLanguage("EN")}
                  >
                    {language}
                  </li>
                  <li>
                    <BsFillMoonStarsFill
                      onClick={() => setDarkMode(!darkMode)}
                      className="cursor-pointer text-2xl dark:text-white"
                    />
                  </li>
                  <li>
                    <a
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                      href="/CV-Lorenzo Caramaschi-Desarrollador Front End.pdf"
                      download="CV-Lorenzo Caramaschi-Desarrollador Front-End.pdf"
                    >
                      Curriculum
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="text-center p-10">
                <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
                  Lorenzo Caramaschi
                </h2>
                <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
                  Desarrollador Front-End
                </h3>
                <p className="text-md py-5 laeding-8 text-gray-800 md: text-xl max-w-xl mx-auto dark:text-gray-400">
                  Soy una persona muy apasionada a la hora de encarar nuevos
                  proyectos y con buenas relaciones interpersonales. Siempre le
                  busca una salida creativa a los trabajos que me toca realizar.
                  Actualmente busco mi primer trabajo como Desarrollador
                  Frontend
                </p>
              </div>
              <div className="text-5xl flex justify-center gap-8 py-3 text-black dark:text-teal-500">
                <a href="https://twitter.com/loluza_" target="_blank">
                  <AiFillTwitterCircle />
                </a>
                <a
                  href="https://www.linkedin.com/in/lorenzo-caramaschi-desarrollador-fullstack/"
                  target="_blank"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCh7VlBeelGrITY7AX5-veyg"
                  target="_blank"
                >
                  <AiFillYoutube />
                </a>
                <a href="https://github.com/lorenzocaramaschi" target="_blank">
                  <AiFillGithub />
                </a>
                <a href="mailto:caramaschilorenzo@gmail.com" target="_blank">
                  <AiFillMail />
                </a>
              </div>
              <div className="relative mx-auto bg-gradient-to-b from-teal-500 to-teal-950 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
                <Image src={loloFace} fill className="object-cover" />
              </div>
            </section>

            <section>
              <div>
                <h3 className="text-5xl font-bold py-1 dark:text-white">
                  Objetivos
                </h3>
                <p className="text-md py-5 laeding-8 text-gray-800  dark:text-gray-400">
                  Mi objetivo a nivel personal es crecer y desarrollarme como
                  <span className="text-teal-500">
                    {" "}
                    Desarrollador Front-End
                  </span>{" "}
                  y aprender a trabajar con la mayor variedad de lenguajes y
                  librerías posibles, para luego llevar a cabo proyectos con los
                  que siempre soñé de la mejor manera y la más óptima posible.
                  Por otra parte anhelo adquirir experiencia en este rubro y así
                  poder ser capaz de luego transmitírsela a más personas
                </p>
              </div>
              <div className="lg:grid grid-cols-3 grid-flow-row">
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-teal-500">
                  <Image />
                  <h3 className="text-3xl font-bold pt-8 pb-2 dark:text-white">
                    Educación
                  </h3>
                  <div className="mb-5">
                    <h4 className=" text-xl py-1 text-teal-600">
                      Facultad de Arte, Diseño y Urbanismo de Buenos Aires
                    </h4>
                    <h5 className="text-gray-800 py-1  dark:text-gray-400">
                      Diseño Gráfico, <strong>2019-2019</strong>
                    </h5>
                    <p className="text-gray-500 py-1 dark:text-gray-300">
                      Aprendí a utilizar <strong>Illustrator</strong>
                    </p>
                  </div>
                  <div className="mb-5">
                    <h4 className=" text-xl py-1 text-teal-600">
                      Escuela Da Vinci
                    </h4>
                    <h5 className="text-gray-800 py-1  dark:text-gray-400">
                      Diseño y Programación de Videojuegos,{" "}
                      <strong>2020-2022</strong>
                    </h5>
                    <p className="text-gray-500 py-1 dark:text-gray-300">
                      Aprendí a utilizar <strong>Unity</strong> como motor de
                      videojuegos,
                      <strong>Photoshop, ZBrush, Substance Painter</strong> y un
                      conocimiento básico en <strong>C#</strong> orientado a
                      videojuegos
                    </p>
                  </div>
                  <div className="mb-5">
                    <h4 className=" text-xl py-1 text-teal-600">
                      University of Cambridge
                    </h4>
                    <h5 className="text-gray-800 py-1  dark:text-gray-400">
                      Certificate in Advanced English, <strong>2018</strong>
                    </h5>
                    <p className="text-gray-500 py-1 dark:text-gray-300">
                      Learned English and received the
                      <strong>
                        {" "}
                        Certificate in Advanced English (C1 Level)
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-teal-500">
                  <Image />
                  <h3 className="text-3xl font-bold pt-8 pb-2 dark:text-white">
                    Disponibilidad
                  </h3>
                  <h4 className=" text-xl py-4 text-teal-600">
                    Part-time/Full-time
                  </h4>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-teal-500">
                  <Image />
                  <h3 className="text-3xl font-bold pt-8 pb-2 dark:text-white">
                    Cursos y capacitaciones
                  </h3>
                  <h4 className=" text-xl py-1 text-teal-600">Coderhouse</h4>
                  <h5 className="text-gray-800 py-1  dark:text-gray-400">
                    Curso de Programador Full-Stack, <strong>2022-2023</strong>
                  </h5>
                  <p className="text-gray-500 py-1 dark:text-gray-300">
                    Desarrollé proyectos con{" "}
                    <strong>
                      HTML5, CSS3, Javascript, React.js and MERN stack (Mongo,
                      Express, React, Node)
                    </strong>
                  </p>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-teal-500">
                  <Image />
                  <h3 className="text-3xl font-bold pt-8 pb-2 dark:text-white">
                    Competencias
                  </h3>
                  <div className="grid grid-cols-2 grid-rows-2 gap-5">
                    <div className="flex flex-col">
                      <h4 className=" text-xl py-1 text-teal-600">Front-End</h4>
                      <ul>
                        <li className="dark:text-gray-400">HTML</li>
                        <li className="dark:text-gray-400">CSS</li>
                        <li className="dark:text-gray-400">Javascript</li>
                        <li className="dark:text-gray-400">React.js</li>
                        <li className="dark:text-gray-400">Next.js</li>
                        <li className="dark:text-gray-400">Bootstrap</li>
                        <li className="dark:text-gray-400">Material UI</li>
                        <li className="dark:text-gray-400">SASS</li>
                        <li className="dark:text-gray-400">Figma</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className=" text-xl py-1 text-teal-600">Back-End</h4>
                      <ul>
                        <li className="dark:text-gray-400">Node.js</li>
                        <li className="dark:text-gray-400">Express.js</li>
                        <li className="dark:text-gray-400">MongoDB</li>
                        <li className="dark:text-gray-400">MySQL</li>
                        <li className="dark:text-gray-400">Firebase</li>
                        <li className="dark:text-gray-400">Postman</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className=" text-xl py-1 text-teal-600">
                        Paquete Adobe
                      </h4>
                      <ul>
                        <li className="dark:text-gray-400">Photoshop</li>
                        <li className="dark:text-gray-400">Illustrator</li>
                        <li className="dark:text-gray-400">Premiere</li>
                        <li className="dark:text-gray-400">After Effects</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-teal-500">
                  <Image />
                  <h3 className="text-3xl font-bold pt-8 pb-2 dark:text-white">
                    Aptitudes
                  </h3>
                  <ul>
                    <li className="dark:text-gray-400">Trabajo en equipo</li>
                    <li className="dark:text-gray-400">Creatividad</li>
                    <li className="dark:text-gray-400">Empatía</li>
                    <li className="dark:text-gray-400">Motivación</li>
                    <li className="dark:text-gray-400">Organización</li>
                  </ul>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-teal-500">
                  <Image />
                  <h3 className="text-3xl font-bold pt-8 pb-2 dark:text-white">
                    Idiomas
                  </h3>
                  <h4 className=" text-xl py-1 text-teal-600">Inglés</h4>
                  <h5 className="text-gray-800 py-1  dark:text-gray-400">
                    Nivel avanzado
                  </h5>
                </div>
              </div>
            </section>
            <section>
              <div>
                <h3 className="text-5xl font-bold py-1 dark:text-white">
                  Portafolio
                </h3>
                <p className="text-md leading-8 text-gray-800 py-2 dark:text-gray-400">
                  Estos son algunos de los proyectos que he realizado y tambien
                  en los que estoy trabajando!
                </p>
              </div>
              <div className="flex flex-col gap-10 py-10 lg:flex-wrap">
                <div className="basis-1/3 flex-1">
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="basis-1/3 flex-1">
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="basis-1/3 flex-1">
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </div>
  );
}
