import newReact from './newReact'

/** @jsx newReact.createElement */

const rootContainer = document.getElementById('root')

const App = () => {
  const [counter, setCounter] = newReact.useState(0)

  return (
    <div>
      <h1 style={{ backgroundColor: 'red', color: 'blue' }}>Hello World</h1>
      <p onClick={() => setCounter((counter) => counter + 1)}>
        Counter: {counter}
      </p>
    </div>
  )
}

newReact.render(<App />, rootContainer)
