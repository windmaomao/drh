import Link from 'next/link'
import Layout from '../components/Layout'
import Title from '../components/Title'

export default function Home({ base }) {
  return (
    <Layout base={base}>
      <main>
        <Title base={base} />

        <div className="grid">
          <Link href="/chapter">
            <a className="card">
              <h3>Table of Content &rarr;</h3>
              <p>Find out book outlines and covered materials.</p>
            </a>
          </Link>

          <a
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

        </div>
      </main>
    </Layout>
  )
}
