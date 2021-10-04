import Link from 'next/link'
import TocLayout from '../components/TocLayout'

export default function TOC({ base }) {
  return (
    <TocLayout base={base}>
      <Link href="/nav">
        <a className="back">← Navigation</a>
      </Link>
      <h1>Demos</h1>
      <ul>
        <li>
          <Link href="">
            <a>1. Coding <i>React</i> in online editors</a>
          </Link>
        </li>
        <li>
          <Link href="/demo/2-draft-function-state">
            <a>2. Add state to function component</a>
          </Link>
        </li>
      </ul>
    </TocLayout>
  )
}
