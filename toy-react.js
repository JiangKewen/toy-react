const RENDER_TO_DOM = Symbol('RENDER_TO_DOM')

class EleWrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }

  setAttribute(key, val) {
    if (key.match(/^on([\s\S]+)$/)) {
      this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/, s => s.toLowerCase()), val)
    } else {
      if (key === 'className') {
        this.root.setAttribute('class', val)
      } else {
        this.root.setAttribute(key, val)
      }
    }
  }

  appendChild(component) {
    const range = document.createRange()
    range.setStart(this.root, this.root.childNodes.length)
    range.setEnd(this.root, this.root.childNodes.length)
    range.deleteContents()
    component[RENDER_TO_DOM](range)
  }

  [RENDER_TO_DOM](range) {
    range.deleteContents()
    range.insertNode(this.root)
  }
}

class TextWrapper {
  constructor(text) {
    this.root = document.createTextNode(text)
  }

  [RENDER_TO_DOM](range) {
    range.deleteContents()
    range.insertNode(this.root)
  }
}

export class Component {
  constructor() {
    this.props = Object.create(null)
    this.childrend = []
    this._root = null
    this._range = null
  }

  setAttribute(key, val) {
    this.props[key] = val
  }

  appendChild(component) {
    this.childrend.push(component)
  }

  [RENDER_TO_DOM](range) {
    this._range = range
    this.render()[RENDER_TO_DOM](range)
  }

  rerender() {
    console.log(this._range, 'rerender')
    const tempRange = document.createRange()
    const oldRange = this._range
    tempRange.setStart(oldRange.startContainer, oldRange.startOffset)
    tempRange.setEnd(oldRange.startContainer, oldRange.startOffset)
    this[RENDER_TO_DOM](tempRange)

    oldRange.setStart(tempRange.endContainer, tempRange.endOffset)
    oldRange.deleteContents()
  }

  setState(newState) {
    console.log('newState', newState)

    if (this.newState === null || typeof this.newState !== 'object') {
      this.state = newState
      this.rerender()
      return
    }

    const merge = (oldState, newState) => {
      for (const key in newState) {
        if (newState.hasOwnProperty(key)) {
          const element = newState[key];
          if (element === null || typeof element !== 'object') {
            oldState[key] = newState[key]
          } else {
            merge(oldState[key], newState[key])
          }
        }
      }
    }

    merge(this.state, newState)

    this.rerender()
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
      if (child === null) {
        continue
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
  // parentEle.appendChild(componet.root)
  const range = document.createRange()
  range.setStart(parentEle, 0)
  range.setEnd(parentEle, parentEle.childNodes.length)
  range.deleteContents()
  componet[RENDER_TO_DOM](range)
}
