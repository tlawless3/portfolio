import React, {Component} from 'react'
import {Image} from 'semantic-ui-react'

export default class Home extends Component {
  constructor(){
    super()

    this.state = {
      title: '',
    }
    this.typeTitle = this.typeTitle.bind(this);
  }

  componentDidMount(){
    setTimeout(() => {this.typeTitle()}, 300)
  }

  //gives 'typewriter' effect to text
  typeTitle(){
    let titleText = 'Software Developer';
    type.call(this, titleText, 0)
      let that = this
      function type(text, i){
        if (i < text.length){
          this.setState({
            title: text.substring(0, i + 1)
          })
          setTimeout(function(){
            type.call(that, text, i + 1)
          }, 100)
      }
    }
  }
  render () {
    return (
    <div id = "home">
      <div id='homeBackgroundImage'>
        <img src='assets/background.jpg' />
      </div>
      <div id='homeBackgroundTransparency'>
      </div>
      <div id='homeBackground'>
        <div id='homeText'>
          <div id='homeName'>
            <p> Thomas Lawless  </p>
          </div>
          <div id='homeTitle'>
            <p>{this.state.title} <span id='cursor' aria-hidden='true'></span></p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
