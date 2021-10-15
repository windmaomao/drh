import Layout from './Layout'

export default function TocLayout({ children, base }) {
  return (
    <Layout base={base}>
      <main>
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

        .toc h2 {
          margin-top: 2rem;
          font-size: 1.6rem;
        }

        .toc h3 {
          margin-top: 1.5rem;
          font-size: 1.3rem;
        }

        .toc ul {
          margin: 2rem;
        }

        .toc li {
          font-family: Serif, Times New Rome;
          font-size: 1.2rem;
          line-height: 2.25rem;
        }

        main {
          max-width: 600px;
          padding: 1rem;
        }

        main p {
          line-height: 1.5rem;
        }

        .banner {
        }
      `}</style>
    </Layout>
  )
}
