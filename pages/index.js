import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import SkillCard from '../src/components/skill-card';
import CarreerCard from '../src/components/carreer-card';

export default function Home() {

  const skills = [
    {name: 'HTML5', porcentage: 100},
    {name: 'CSS', porcentage: 100},
    {name: 'SASS', porcentage: 100},
    {name: 'Javascript', porcentage: 95},
    {name: 'Typescript', porcentage: 90},
    {name: 'React', porcentage: 75},
    {name: 'NextJs', porcentage: 70},
    {name: 'AngularJs', porcentage: 74},
    {name: 'Angular', porcentage: 90},
    {name: 'Vue', porcentage: 76},
    {name: 'Redux', porcentage: 80},
    {name: 'Flutter', porcentage: 67},
    {name: 'JQuery', porcentage: 80},
    {name: 'PHP', porcentage: 73},
    {name: 'NodeJs', porcentage: 45},
    {name: 'Cypress.io', porcentage: 63},
  ]
  const carrier = [
    {
      name: 'UAUBox Brasil',
      timeWork: 'dez. de 2020 - o momento',
      occupation: 'Desenvolvedor Front-end Senior',
      description: 'Desenvolvedor Front-end Senior usando tecnologias como NextJS, React, Vue, Typrescript e SASS'
    },
    {
      name: 'Atech - Negócios em Tecnologia S/A',
      timeWork: 'jul. de 2017 - dez de 2020',
      occupation: 'Desenvolvedor Front-end',
      description: 'Desenvolvedor Front-end em ambiente ágil usando Scrum Framework, Angular, AngularJs, Flutter e usando tecnologias como Typescript, Javascript, Redux, SASS e testes unitários.'
    },
    {
      name: 'Univap - Universidade do Vale do Paraíba',
      timeWork: 'jun. de 2013 - jul de 2017',
      occupation: 'Desenvolvedor PHP',
      description: 'Desenvolvedor Full Stack usando PHP, MySql, CSS, JQuery, Javascript, Wordpress e Bootstrap na plataforma Moodle.'
    },
    {
      name: 'Kaynak Agência Digital',
      timeWork: 'jan. de 2012 - mai de 2013',
      occupation: 'Desenvolvedor PHP',
      description: 'Desenvolvedor Full Stack usando PHP, MySql, CSS, JQuery, Javascript, Wordpress e Bootstrap.'
    },
    {
      name: 'Univap - Universidade do Vale do Paraíba',
      timeWork: 'mar. de 2010 - dez de 2011',
      occupation: 'Desenvolvedor PHP - Estágio',
      description: 'Desenvolvedor Full Stack usando PHP, MySql, CSS, JQuery e Javascript.'
    },
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>BMartinelli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>
            &lt;bmartinelli/&gt;
          </h1>

          {/* <nav>
            <a href="#">BR</a>
            <a href="#">EN</a>
          </nav> */}
        </div>
      </header>
      <main className={styles.main}>
        <img src="/images/bruno-martinelli.jpg" alt="Foto Bruno Martinelli"></img>
        <div className={styles.descriptionContainer}>
          <p>Desenvolvedor <span className={styles.occupation}>Front-end</span></p>
        </div>
      </main>

      <section className={styles.resume}>
        <div className={styles.sectionContainer}>
        <h2 className={styles.titleSection}>Sobre</h2>
          <p>
            Meu nome é Bruno Martinelli, sou desenvolvedor Front-end formado em Ciência da Computação, amante da Tecnologia e seus desafios.
          </p>
          <p>          
            Atuo como desenvolvedor Front-end desde 2010, onde adquiri sólidos conhecimentos em algumas tecnologias como Javascript, Typescript, Redux, SASS, metodologia Ágil (Scrum) e com os frameworks React, NextJs, Vue, Angular, AngularJS, Flutter (Mobile), Cypress entre outros.
          </p>
        </div>
      </section>

      <section className={styles.skills}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.titleSection}>Minhas Habilidades</h2>
          <p className={styles.subtitleSection}>Essas são algumas das tecnologias que conheço.</p>
          <div className={styles.skillsCardContainer}>
            {skills.map((skill, index) => 
              <SkillCard skill={skill}  key={index} />
            )}
          </div>
        </div>
      </section>

      <section className={styles.carreer}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.titleSection}>Minha Carreira</h2>
          <p className={styles.subtitleSection}>Algumas das empresas onde tive a oportunidade de fazer parte.</p>
          {carrier.map((skill, index) => 
            <CarreerCard carreer={skill}  key={index} />
          )}
        </div>
      </section>

      <section className={styles.social}>
        aaa
      </section>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
