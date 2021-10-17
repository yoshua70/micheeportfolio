import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import Box from '../components/Box/Box'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Michée Allidjinou | Blog</title>
        <meta name="description" content="Personal website of Michée Allidjinou" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <p>En construction. 👷🏾</p>
      </Hero>
     
    </Layout>
  )
}
