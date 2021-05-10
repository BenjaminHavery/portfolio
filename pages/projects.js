
import ProjectsList from '../components/ProjectsList'


export default function Home() {
  return (
    <ProjectsList />
  )
}


export function getStaticProps() {
  return { props: { title : 'Projects' }}
}
