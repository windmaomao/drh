import Link from 'next/link'
import Layout from 'components/Layout'

export default function Index({ base, t }) {
  return (
    <Layout base={base}>
      <main>
        <h2 className="greeting">{t('Hello')},</h2>
        <h1 className="title">
          {t('Design')} <i>React</i> {t('Hooks')}<br /> {t('the Right Way')}
        </h1>

        <p className="description">
          {t('Discover solutions for effectively designing your React Hooks')}
        </p>

        <img src={`${base}/images/hooks-logo.png`} alt="Hooks" width="96" />

        <Link href="/nav">
          <button>{t(`Let's Explore`)}!</button>
        </Link>

        <p className="note">
          While you are using the site, 
          clicking the hook icon anytime to 
          get back to the home page.
        </p>
      </main>
      
      <style jsx>{`
        .greeting {
          color: #333;
        }
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
          font-size: 3rem;
          font-weight: 700;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.2rem;
          font-style: italic;
          font-weight: 300;
        }

        .note {
          margin: 3rem;
          max-width: 300px;
          font-size: 0.8rem;
        }

      `}</style>
    </Layout>
  )
}
