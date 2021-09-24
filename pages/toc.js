import Link from 'next/link'
import Layout from '../components/Layout'

const tocTitles = {
  ch4: "4. Use State to Dispatch States",
  ch5: "5. Use Effect to Handle Side Effects",
  ch6: "6. Use Memo to Skip Assignments",
  ch7: "7. Use Context to Propagate Updates",
  ch8: "8. Use Ref to Hide Assignments",
  ch9: "9. Use Custom Hook to Reuse Logic"
}

const toc = [
  { id: 'ch4', src: '4-useState' },
  { id: 'ch5', src: '' },
  { id: 'ch6', src: '' },
  { id: 'ch7', src: '' },
  { id: 'ch8', src: '' },
  { id: 'ch9', src: '' },
]

export default function TOC() {
  return (
    <Layout>
      <main>
        <img src="/images/hooks-logo.png" alt="Hooks" width="96" />

        <h1 className="title">
          Design <i>React</i> Hooks<br /> the Right Way
        </h1>

        <section className="toc">
          <h1>Table of Content</h1>
          <ul>
            {toc.map(({ id, src }) => (
              <li key={id}>
                <Link href={`/chapters/${src}`}>
                  <a>{tocTitles[id]}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>

      </main>
    </Layout>
  )
}
