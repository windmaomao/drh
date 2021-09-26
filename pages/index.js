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

        <p className="note">
          While you are using the site, 
          clicking the icon anytime to 
          get back to the home page.
        </p>
      </main>
      
      <style jsx>{`
        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-family: Serif, Times New Roman;
          font-size: 4rem;
          font-weight: 700;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          font-style: italic;
          font-weight: 300;
        }

        .note {
          margin: 2rem;
          max-width: 300px;
          font-size: 0.9rem;
        }

      `}</style>
    </Layout>
  )
}
