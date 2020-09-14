class EleWrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }

  setAttribute(key, val) {
    this.root.setAttribute(key, val)
  }

  appendChild(component) {
    this.root.appendChild(component.root)
  }
}

class TextWrapper {
  constructor(text) {
    this.root = document.createTextNode(text)
  }
}

export class Component {
  constructor() {
    this.props = Object.create(null)
    this.childrend = []
    this._root = null
  }

  setAttribute(key, val) {
    this.props[key] = val
  }

  appendChild(component) {
    this.childrend.push(component)
  }

  get root() {
    if (!this._root) {
      this._root = this.render().root
    }
    return this._root
  }
}

export const Brooks = (tag, attrs, ...children) => {
  let ele

  if (typeof tag === 'string') {
    ele = new EleWrapper(tag)
  } else {
    ele = new tag
  }

  for (const key in attrs) {
    ele.setAttribute(key, attrs[key])
  }
  
  const insertChilds = (children) => {
    for (const child of children) {
      if (typeof child === 'string') {
        child = new TextWrapper(child)
      }
      if (Array.isArray(child)) {
        insertChilds(child)
      } else {
        ele.appendChild(child)
      }
    }
  }

  insertChilds(children)

  return ele
}

export const render = (componet, parentEle) => {
  console.log(parentEle, 'aaa')
  parentEle.appendChild(componet.root)
}