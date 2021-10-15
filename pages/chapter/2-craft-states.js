import Link from 'next/link'
import TocLayout from 'components/TocLayout'
import Codepen from 'components/Codepen'
import Keyword from 'components/Keyword'

export default function Ch2({ base }) {
  return (
    <TocLayout base={base}>
      <Link href="/chapters">
        <a className="back">← Back</a>
      </Link>
      <h1>Crafting States in Function</h1>
      <p>What You Will Learn</p>
      <ul>
        <li>How to build a state from scratch</li>
        <li>How to apply states to your app</li>
      </ul>
      <p>
        In the previous chapter, we learned how to write 
        functional components in <Keyword>React</Keyword>. In this chapter, 
        we will craft a special variable called state in 
        the function components. We will see what benefits 
        a state can bring us, including requesting a new update,
        making a variable persistent, listening to a value change
        as well as performing tasks upon mount. We will also see
        an example of applying a state to a single page application. 
        In the end, we will take a look closely 
        what role states play with <Keyword>UI</Keyword>.
      </p>

      <h2>Outline</h2>
      <ul>
        <li>Crafting a State</li>
        <li>Applying States to App</li>
        <li>How States Work with <Keyword>UI</Keyword></li>
      </ul>
      
      <h2>Code Playground</h2>

      <h3>No State</h3>
      <p>Function component with no state.<i>The button will not work.</i></p>
      <Codepen id="jOLNXzO" height="150" />

      <h3>A State</h3>
      <p>Function component with a global state.</p>
      <Codepen id="KKvPJdg" height="150" />

      <h3>Linked States</h3>
      <p>Function component with multiple states but <i>linked</i>.</p>
      <Codepen id="qBXWgay" height="150" />

      <h3>Multiple States</h3>
      <p>Function component with multiple states.</p>
      <Codepen id="dyzbaVr" height="150" />

      <h3>Listen to State Change</h3>
      <p>Function component aware of the state change.</p>
      <Codepen id="MWvgxLR" height="150" />

      <h3>Perform Task at Mount</h3>
      <p>Function component fetches API at mount.</p>
      <Codepen id="PoKobVZ" height="150" />

      <h3>Single Page Application</h3>
      <p>Function components to get single page app work.</p>
      <Codepen id="PoKoWPG" height="250" />

      <style jsx>{`
      `}</style>
    </TocLayout>
  )
}
