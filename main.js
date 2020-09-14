import { Brooks, Component, render } from './toy-react.js'

// ------------------------------------------------------

// const func = a => '' + a

// console.log(func(100))

// window.func = func

// ------------------------------------------------------

class Winter extends Component {
  render() {
    return (
      <div>
        {this.childrend}
      </div>
    )
  }
}

window.ele = (
  <Winter class="box" id="toy">
    <span class="redText">hello</span>
    <br/>
    <a>Winter</a>
  </Winter>
)

render(ele, document.body)
