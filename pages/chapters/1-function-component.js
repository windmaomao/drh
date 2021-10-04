import Link from 'next/link'
import TocLayout from '../../components/TocLayout'

export default function Chapter({ base }) {
  return (
    <TocLayout base={base}>
      <div style={{ textAlign: "center" }}>
        <img src={`${base}/images/ch01.png`} width="500px" />
      </div>
      <h1>
        1. Introducing Function Component
      </h1>
      <Link href="/chapter">
        <a className="back">←</a>
      </Link>
      <ul>
        <li>
          History of <i>UI</i> Components
          <ul className="bullets">
            <li><i>jQuery</i></li>
            <li><i>AngularJS</i></li>
            <li><i>React</i></li>
            <li><i>LitElement</i></li>
          </ul>
        </li>
        <li>Building App with Components</li>
        <li>Introducing Function Component</li>
        <li>Writing a Function Component</li>
        <li>Function Component Example</li>
        <li>Summary</li>
        <li>Questions</li>
        <li>Appendix</li>
      </ul>
      <style jsx>{`
        ul.bullets {
          display: flex;
          margin: 0;
        }
        ul.bullets li {
          font-size: 1rem;
          margin-left: 0.5rem;
        }
      `}</style>
    </TocLayout>
  )
}
