import Link from 'next/link'
import TocLayout from 'components/TocLayout'
import Codepen from 'components/Codepen'
import Keyword from 'components/Keyword'

export default function Chapter1({ base }) {
  return (
    <TocLayout base={base}>
      <Link href="/chapters">
        <a className="back">← Back</a>
      </Link>
      <h1>
        Introducing Function Component
      </h1>
      <p>What You Will Learn</p>
      <ul>
        <li>What is a function component</li>
        <li>How to use function components in <Keyword>React</Keyword></li>
      </ul>
      <p>
        In this chapter, we will first start with a brief history of <Keyword>UI</Keyword> components
        for the past two decades and get to know how React uses <Keyword>UI</Keyword> components
        to put together an application. You will learn what is a function component
        with the explanation of its props and the basic parent/child relationship.
        You will then get some tips on how to write a function component. 
        At the end, you will see a practical function component example, <Keyword code>Nav</Keyword>.
      </p>

      <h2>Outline</h2>
      <ul>
        <li>History of <i>UI</i> Components</li>
        <li>Building App with Components</li>
        <li>Introducing Function Component</li>
        <li>Writing a Function Component</li>
        <li>Function Component Example</li>
      </ul>

      <h2>Code Playground</h2>

      <h3>Hello World</h3>
      <p>Function component "Hello World".</p>
      <Codepen id="ExvYPEX" height="150" />
      
      <h3>Home Page</h3>
      <p>React app with a default Home page using function component.</p>
      <Codepen id="porzgOy" height="200" />

      <h3>Nav Component</h3>
      <p>
        Nav component display a navigation menu. 
        <i>You can't change the menu yet due to lack of state.</i>
      </p>
      <Codepen id="porzQjV" height="180" />

      <style jsx>{`
      `}</style>
    </TocLayout>
  )
}
