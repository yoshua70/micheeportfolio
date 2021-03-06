import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import Box from '../components/Box/Box'
import Image from 'next/image'

export default function Home() {
  const bio = `Je suis un développeur fullstack basé en Côte d'Ivoire passioné par la réalisation d'applications web pour les entrepreneurs/business. Si je ne suis pas en train de coder alors je suis sur un Rubik's cube ou parlant de Star wars avec mes potes.`;
  const interests = `Star wars - Rubik's Cube - Touchtyping`;
  return (
    <Layout>
      <Head>
        <title>Michée Allidjinou</title>
        <meta name="description" content="Personal website of Michée Allidjinou" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <h1>Construisons votre rêve sur le web.</h1>
        <p>Développement web fullstack.</p>
      </Hero>
      <Box id="bio">
        <h2>Bio 😎</h2>
        <p>{bio}</p>
      </Box>
      <Box id="realisations">
        <h2>Réalisations 🧑🏽‍🚀</h2>
        <span>
          <h2>Avax news API</h2>
          <p>Une API pour récupérer les premiers articles du site web avaxnews par catégorie. Réalisé avec Puppeteer et Node.js, hébergé sur heroku.</p>
          <a href="https://github.com/yoshua70/avaxnewsapi.git" target="blank">code source →</a>
          <a href="https://avaxnewsapi.herokuapp.com/" target="blank">tester →</a>
        </span>
      </Box>
      <Box>
        <h2>Compétences  👨‍💻</h2>
        <p>Langages : Javascript - PHP - Python - HTML/CSS</p>
        <p>Framework/Librairie : React - Next.js - Gatsby.js - Node.js - Laravel</p>
        <p>Savoir-faire : API REST - JAMStack</p>
      </Box>
      <Box>
        <h2>❤️</h2>
        <p>{interests}</p>
      </Box>
      <Box id="contact">
        <h2>On se chop ?</h2>
        <a href="https://github.com/yoshua70">
          <Image src="https://img.icons8.com/windows/32/000000/github.png" alt="github icon" width="32px" height="32px"/>
          @yoshua70
        </a>
        <a href="https://www.instagram.com/micheeallidjinou/">
          <Image src="https://img.icons8.com/material-outlined/24/000000/instagram-new.png" alt="instagram icon" width="24px" height="24px"/>
          @micheeallidjinou
        </a>
      </Box>
    </Layout>
  )
}
