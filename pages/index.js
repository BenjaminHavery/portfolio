
import Layout from '../components/Layout'
import ProjectsList from '../components/ProjectsList'


export default function Home() {
  return (
    <Layout title="my projects">

      <main className='main'>
        <p>here's some projects:</p>
        <ProjectsList />
      </main>

    </Layout>
  )
}

