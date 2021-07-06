const createElement = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  }
}

const createTextElement = (text) => {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

const render = (element, container) => {
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type)

  const isProperty = (key) => key !== 'children'

  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name]
    })

  element.props.children.forEach((child) => render(child, dom))

  container.appendChild(dom)
}

const createDom = (fiber) => {
  const dom =
    fiber.type == 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(fiber.type)

  updateDom(dom, {}, fiber.props)

  return dom
}

const updateDom = (dom, prevProps, nextProps) => {}

const newReact = {
  createElement,
  render,
}

export default newReact
