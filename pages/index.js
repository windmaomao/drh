import Layout from '../components/Layout'
import Link from 'next/link'

export default function Index() {
  return (
    <Layout>
      <main>
        <h1 className="title">
          Design <i>React</i> Hooks<br /> the Right Way
        </h1>

        <p className="description">
          Discover solutions for effectively designing your React Hooks
        </p>

        <img src="/images/hooks-logo.png" alt="Hooks" width="96" />

        <Link href="/nav">
          <button>Let's Explore!</button>
        </Link>
      </main>
    </Layout>
  )
}
