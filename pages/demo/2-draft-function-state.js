import Link from 'next/link'
import TocLayout from '../../components/TocLayout'
import { useState } from 'react'

const code1 = `
const Title = () => {
  let count = 0

  const onClick = () => {
    console.log('clicked', count)      ➀
    count = count + 1
  }

  console.log('updated', count)	       ➁
  return (
    <>
      <button onClick={onClick}>+</button>
      <h1>Hello World+{count}</h1>
    </>
  )
}
`
const sketch1 = `
|----0--1-2--3-4----5------> clicked   ➀
0--------------------------> updated   ➁
`
function Title1() {
  let count = 0

  const onClick = () => {
    count = count + 1
  }

  return (
    <>
      <button onClick={onClick}>+</button>&nbsp;
      <span>Hello World+{count}</span>
    </>
  )
}

const code2 = `
let m = undefined

function _getM(initialValue) {
  if (m === undefined) {
    m = initialValue
  }

  return m
}

function _setM(value) {
  m = value
  ReactDOM.render(<Title />, rootEl)
}

function Title2() {
  let count = _getM(0)

  const onClick = () => {
    console.log('clicked', count)      ➀
    count = count + 1
    _setM(count)
  }

  console.log('updated', count)	       ➁
  return (
    <>
      <button onClick={onClick}>+</button>
      <h1>Hello World+{count}</h1>
    </>
  )
}
`
const sketch2 = `
|----0--1-2--3-4----5------> clicked   ➀
0----1--2-3--4-5----6------> updated   ➁
`

let m = undefined
function _getM(initialValue) {
  if (m === undefined) m = initialValue
  return m
}

function _setM(value, update) {
  m = value
  update()
}

function Title2() {
  let count = _getM(0)
  const [, update] = useState(0)

  const onClick = () => {
    count = count + 1
    _setM(count, () => {
      update(v => v + 1)
    })
  }

  return (
    <>
      <button onClick={onClick}>+</button>&nbsp;
      <span>Hello World+{count}</span>
    </>
  )
}

const code3=`
let states = {}

function _getM2(initialValue, key) {
  if (states[key] === undefined) {
    states[key] = initialValue
  }

  return states[key]
}

function _setM2(v, key) {
  states[key] = v
  ReactDOM.render(<Title />, rootEl)
}

function Title3() {
  let countH = _getM2(0, 'H')
  let countW = _getM2(0, 'W')

  const onClickH = () => {
    console.log('clickedH', countH)     ➀
    countH = countH + 1
    _setM2(countH, 'H')
  }

  const onClickW = () => {
    console.log('clickedW', countW)     ➀
    countW = countW + 1
    _setM2(countW, 'W')
  }

  console.log('updatedH', countH)       ➁
  console.log('updatedW', countW)       ➁

  return (
    <>
      <button onClick={onClickH}>+</button>
      <h1>Hello+{countH}</h1>
      <button onClick={onClickW}>+</button>
      <h1>World+{countW}</h1>
    </>
  )
}
`
const sketch3=`
|----0--1-2----------------> clickedH   ➀
|------------0-1----2------> clickedW   ➀
0----1--2-3--3-3----3------> updatedH   ➁
0----0--0-0--1-2----3------> updatedW   ➁
`

let states = {}
function _getM2(initialValue, key) {
  if (states[key] === undefined) states[key] = initialValue
  return states[key]
}
function _setM2(v, key, update) {
  states[key] = v
  update()
}

function Title3() {
  let countH = _getM2(0, 'H')
  let countW = _getM2(0, 'W')
  const [, update] = useState(0)

  const onClickH = () => {
    countH = countH + 1
    _setM2(countH, 'H', () => {
      update(v => v + 1)
    })
  }

  const onClickW = () => {
    countW = countW + 1
    _setM2(countW, 'W', () => {
      update(v => v + 1)
    })
  }

  return (
    <>
      <button onClick={onClickH}>+</button>&nbsp;
      <span>Hello+{countH}</span>
      <button onClick={onClickW}>+</button>&nbsp;
      <span>World+{countW}</span>
    </>
  )
}

export default function Demo({ base }) {
  return (
    <TocLayout base={base}>
      <Link href="/chapters">
        <a className="back">←</a>
      </Link>
      <h1>Craft state in <br/><i>React</i> function component</h1>
      <h3>Case 1: Plain variable in function</h3>
      <Title1 />
      <pre>{sketch1}</pre>
      <pre>{code1}</pre>
      <h3>Case 2: Persistent state across functions</h3>
      <Title2 />
      <pre>{sketch2}</pre>
      <pre>{code2}</pre>
      <h3>Case 3: Multiple states in function</h3>
      <Title3 />
      <pre>{sketch3}</pre>
      <pre>{code3}</pre>

      <style jsx global>{`
        button {
          background: #0469ba;
          color: white;
          border-radius: 5px;

          cursor: pointer;
          padding: 0 0.5rem;
          font-size: 1.25rem;          
        }
        span {
          padding-right: 1rem;
        }
      `}</style>
    </TocLayout>
  )
}
