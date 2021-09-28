import Link from 'next/link'
import TocLayout from '../../components/TocLayout'

export default function Chapter({ base }) {
  return (
    <TocLayout base={base}>
      <div style={{ textAlign: "center" }}>
        <img src={`${base}/images/ch10.png`} width="150px" />
      </div>
      <h1>
        10. From <i>Javascript</i>, <i>CSS</i>&nbsp;
        and <i>HTML</i> to <i>React</i>
      </h1>
      <Link href="/chapter">
        <a className="back">←</a>
      </Link>
      <ul>
        <li><i>Javascript ES6</i></li>
        <li><i>CSS-in-JS</i></li>
        <li><i>HTML</i> to <i>JSX</i></li>
        <li><i>React Fiber</i></li>
      </ul>
    </TocLayout>
  )
}
