import React, { Component } from 'react'

 class Mushroom extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       emoji: []
    }
    this.incrementEMoji = this.incrementEMoji.bind(this)

  }
   incrementEMoji(){
    const ranNum = Math.floor(Math.random() * 5) + 1
    let emojiList=[]
    for(let i=0; i<ranNum; i++){
      emojiList.push('🍄')
    }
      this.setState({
        emoji: emojiList
      })
  }


  render(props) {
    console.log(this.state.emoji);

    return (
      <div>
        <h2>Mushrooms</h2>
       <button onClick={()=>this.incrementEMoji('🍄')}>Click me</button> 
       <div>{this.state.emoji}</div>
      </div>
    )
  }
}

export default Mushroom
