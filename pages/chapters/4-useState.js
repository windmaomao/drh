import Head from 'next/head'
import Layout from '../../components/Layout'

export default function TOC() {
  return (
    <Layout>
      <main>
        <img src="/images/hooks-logo.png" alt="Hooks" width="96" />

        <h1 className="title">
          Design <i>React</i> Hooks<br /> the Right Way
        </h1>

        <section className="toc">
          <h1>4. Use State to Dispatch States</h1>
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
