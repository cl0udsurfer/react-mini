import newReact from './newReact'

/** @jsx newReact.createElement */

const rootContainer = document.getElementById('root')

const updateValue = (e) => {
  rerender(e.target.value)
}

const rerender = (value) => {
  const element = (
    <div>
      <h1>This is my own implementation of React</h1>
      <input onInput={updateValue} value={value} type="text" />
      <p>Input Value: {value}</p>
    </div>
  )
  newReact.render(element, rootContainer)
}

rerender('Typed Text')
