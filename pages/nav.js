import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Design React Hook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img className="cover" src="/images/hooks-logo.png" alt="Hooks" />

        <h1 className="title">
          Design <i>React</i> Hooks<br /> the Right Way
        </h1>

        <p className="description">
          Discover solutions for effectively designing your React Hooks
        </p>

        <div className="grid">
          <Link href="/toc">
            <a className="card">
              <h3>Table of Content &rarr;</h3>
              <p>Find out book outlines and covered materials.</p>
            </a>
          </Link>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </Layout>
  )
}
