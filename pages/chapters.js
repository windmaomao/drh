import Link from 'next/link'
import TocLayout from '../components/TocLayout'

export default function TOC({ base }) {
  return (
    <TocLayout base={base}>
      <Link href="/nav">
        <a className="back">← Menu</a>
      </Link>
      <h1>I. Introduction</h1>
      <ul>
        <li>
          <Link href="/chapter/1-function-component">
            <a>1. Introducing Function Component</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/2-craft-states">
            <a>2. Crafting States in Function</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>3. Hooking into React</a>
          </Link>
        </li>
      </ul>
      <h1>II. Hooks</h1>
      <ul>
        <li>
          <Link href="/chapter/4-useState-dispatch-states">
            <a>
              4. <i>Use State</i> to Dispatch States
            </a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>5. Use Effect to Handle Side Effects</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>6. Use Memo to Skip Assignments</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>7. Use Context to Propagate Updates</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>8. Use Ref to Hide Assignments</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>9. Use Custom Hook to Reuse Logic</a>
          </Link>
        </li>
      </ul>
      <h1>III. Resources</h1>
      <ul>
        <li>
          <Link href="/chapter/10-javascript-css-html-react">
            <a>
              10. From <i>Javascript</i>, <i>CSS</i>&nbsp;
              and <i>HTML</i> to <i>React</i>
            </a>
          </Link>
        </li>
      </ul>
    </TocLayout>
  )
}
