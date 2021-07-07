import VReact from './VReact'

/** @jsx VReact.createElement */

const rootContainer = document.getElementById('root')

const App = () => {
  const [counter, setCounter] = VReact.useState(0)

  return (
    <div>
      <h1 style={{ backgroundColor: 'red', color: 'blue' }}>Hello World</h1>
      <p onClick={() => setCounter((counter) => counter + 1)}>
        Counter: {counter}
      </p>
    </div>
  )
}

VReact.render(<App />, rootContainer)
