import React, { Component } from 'react'

 class Mushroom extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       emoji: '⚗️'
    }
    this.showEmoji=this.showEmoji.bind(this)
  }
  

  render() {
    function showEmoji(){
      this.state.emoji.repeat(3)
    }
    return (
      <div>
        <button onClick={()=>showEmoji()}>Click</button>
        <div>{this.state.emoji}</div>
      </div>
    )
  }
}

export default Mushroom

//  showEmoji(){
//     const emoji = '⚗️'

//     emoji.repeat(3)
//   }