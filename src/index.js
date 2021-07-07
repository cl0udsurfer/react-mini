import ReactMini from './ReactMini'

/** @jsx ReactMini.createElement */

const rootContainer = document.getElementById('root')

const App = () => {
  const [counter, setCounter] = ReactMini.useState(0)

  return (
    <div>
      <h1 style={{ backgroundColor: 'red', color: 'blue' }}>Hello World</h1>
      <p onClick={() => setCounter((counter) => counter + 1)}>
        Counter: {counter}
      </p>
    </div>
  )
}

ReactMini.render(<App />, rootContainer)
