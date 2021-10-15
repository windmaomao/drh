import Link from 'next/link'
import TocLayout from '../../components/TocLayout'
import Codepen from '../../components/Codepen'

export default function Demo({ base }) {
  return (
    <TocLayout base={base}>
      <Link href="/demos">
        <a className="back">←</a>
      </Link>
      <h1>Build app with functions</h1>
      <p>Small react app can be quickly test out using online editors.</p>
      <h2>Case 1: Hello World</h2>
      <p>Feel free with play with the demo and fork your own version.</p>
      <Codepen id="ExvYPEX" title="Hello World" />
      <h2>Case 2: Multiple Pages</h2>
      <p>Flip <code>DISPLAY_HOME</code> flag to see different pages.</p>
      <Codepen id="porzgOy" title="Multiple Pages" />

    </TocLayout>
  )
}
