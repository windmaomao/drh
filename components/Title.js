import Link from 'next/link'

export default function Title({ base }) {
  return (
    <>
      <Link href="/">
        <a>
          <img
            className="logo"
            src={`${base}/images/hooks-logo.png`}
            alt="Hooks"
          />
        </a>
      </Link>

      <h1 className="title">
        Design <i>React</i> Hooks<br /> the Right Way
      </h1>

      <p className="description">
        Discover solutions for effectively designing your React Hooks
      </p>

      <style jsx>{`
        .logo {
          width: 96px;
          height: 96px;
          margin: 1rem;
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

      `}</style>
    </>
  )
}
