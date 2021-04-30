
import Head from 'next/head'
import ProjectsList from '../components/ProjectsList'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Ben Havery's projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>My projects</h1>
      <main>
        <p>here's some projects:</p>
        <ProjectsList />
      </main>

    </div>
  )
}

