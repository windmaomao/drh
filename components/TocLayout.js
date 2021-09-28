import Link from 'next/link'
import Layout from './Layout'
import Title from './Title'

export default function TocLayout({ children, base }) {
  return (
    <Layout base={base}>
      <main>
        <Title base={base} />
        <section className="toc">
          {children}
        </section>
      </main>

      <style jsx global>{`
        a.back {
          float: right;
          font-size: 1.5rem;
        }

        .toc h1 {
          margin-top: 4rem;
          font-size: 2rem;
        }

        .toc ul {
          margin: 2rem;
        }

        .toc li {
          font-family: Serif, Times New Rome;
          font-size: 1.5rem;
          line-height: 3.5rem;
        }

        main {
          max-width: 600px;
        }
      `}</style>
    </Layout>
  )
}
