import Link from 'next/link'
import Layout from '../components/TocLayout'

// const tocTitles = {
//   i: "I. Introduction",
//   ii: "II. Hooks",
//   iii: "III. Appendix",
//   ch1: "1. Function Component",
//   ch2: "2. Update with States",
//   ch3: "3. Hooking into React",
//   ch4: "4. Use State to Dispatch States",
//   ch5: "5. Use Effect to Handle Side Effects",
//   ch6: "6. Use Memo to Skip Assignments",
//   ch7: "7. Use Context to Propagate Updates",
//   ch8: "8. Use Ref to Hide Assignments",
//   ch9: "9. Use Custom Hook to Reuse Logic",
//   ch10: "10. From Javascript, CSS and HTML to React"
// }

// const toc1 = [
//   { id: 'ch1', src: '' },
//   { id: 'ch2', src: '' },
//   { id: 'ch3', src: '' },
// ]

// const toc2 = [
//   { id: 'ch4', src: '4-useState-dispatch-states' },
//   { id: 'ch5', src: '' },
//   { id: 'ch6', src: '' },
//   { id: 'ch7', src: '' },
//   { id: 'ch8', src: '' },
//   { id: 'ch9', src: '' },
// ]

// const toc3 = [
//   { id: 'ch10', src: '10-javascript-css-html' }
// ]

// const toc = [
//   { section: 'i', chapters: toc1 },
//   { section: 'ii', chapters: toc2 },
//   { section: 'iii', chapters: toc3 }
// ]

export default function TOC() {
  return (
    <Layout>
      <h1>I. Introduction</h1>
      <ul>
        <li>
          <Link href="">
            <a>1. Function Component</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>2. Update with States</a>
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
          <Link href="/chapters/4-useState-dispatch-states">
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
      <h1>III. Appendix</h1>
      <ul>
        <li>
          <Link href="/chapters/10-javascript-css-html-react">
            <a>
              10. From <i>Javascript</i>, <i>CSS</i>&nbsp;
              and <i>HTML</i> to <i>React</i>
            </a>
          </Link>
        </li>
      </ul>
      {/* {toc.map(({ section, chapters }) => (
        <div key={section}>
          <h1>{tocTitles[section]}</h1>
          <ul>
            {chapters.map(({ id, src }) => (
              <li key={id}>
                <Link href={`/chapters/${src}`}>
                  <a>{tocTitles[id]}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))} */}
    </Layout>
  )
}
