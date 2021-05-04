
import Layout from '../components/Layout'
import ProjectsList from '../components/ProjectsList'


export default function Home() {
  return (
    <Layout title='Projects'>

      <main className='main'>
        <ProjectsList />
      </main>

    </Layout>
  )
}

