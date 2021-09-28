import Link from 'next/link'
import TocLayout from '../../components/TocLayout'

export default function Chapter({ base }) {
  return (
    <TocLayout base={base}>
      <div style={{ textAlign: "center" }}>
        <img src={`${base}/images/ch04.png`} width="300px" />
      </div>
      <h1>
        4. <i>Use State</i> to Dispatch States
      </h1>
      <Link href="/chapter">
        <a className="back">←</a>
      </Link>
      <ul>
        <li>State in React</li>
        <li>useState Design</li>
        <li>Dispatching States</li>
        <li>Test Drive useState</li>
        <li>useState Examples</li>
        <li>Appendix</li>
      </ul>
    </TocLayout>
  )
}
