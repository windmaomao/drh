import Link from 'next/link'
import Layout from '../components/Layout'
import Title from '../components/Title'

export default function Home({ base }) {
  return (
    <Layout base={base}>
      <main>
        <Title base={base} />

        <div className="grid">
          <Link href="/chapters">
            <a className="card">
              <h3>Table of Content &rarr;</h3>
              <p>Find out book outlines and covered materials.</p>
            </a>
          </Link>

          <Link href="/demos">
            <a className="card">
              <h3>Demos &rarr;</h3>
              <p>Take a spin at book demos and examples.</p>
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  )
}
