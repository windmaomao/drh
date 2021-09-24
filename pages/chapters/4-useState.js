import Link from 'next/link'
import Layout from '../../components/Layout'
import Title from '../../components/Title'

export default function TOC() {
  return (
    <Layout>
      <main>
        <Title small />
        <section className="toc">
          <h1>4. Use State to Dispatch States</h1>
          <Link href="/chapter">
            <a className="back">← Go back</a>
          </Link>
          <ul>
            <li>State in React</li>
            <li>useState Design</li>
            <li>Dispatching States</li>
            <li>Test Drive useState</li>
            <li>useState Examples</li>
            <li>Appendix</li>
          </ul>
        </section>
      </main>
    </Layout>
  )
}
