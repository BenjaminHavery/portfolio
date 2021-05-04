export default function Home() {
  return (
    <div></div>
  )
}

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/projects',
      permanent: false,
    },
  }
}