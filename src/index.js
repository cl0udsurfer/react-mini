import newReact from './newReact'

/** @jsx newReact.createElement */
const testElement = (
  <div>
    <h1>This is my own implementation of React</h1>
    <input type="text" />
    <p>This is another text</p>
  </div>
)

const rootContainer = document.getElementById('root')

newReact.render(testElement, rootContainer)
