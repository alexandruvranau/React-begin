import React, {Component} from "react";

class HogwartsLetter extends Component {
  constructor(){
    super();
    this.state = {magicalStatus: 'Muggle-22'}
  }
  changeMagicalStatus(){
    this.setState({
      magicalStatus: 'Magical-Student'
    })
  }
  render(){
    return(
      <div>
        <p>Welcome {this.state.magicalStatus}!</p>
        <button onClick={()=> this.changeMagicalStatus()}>Take the train</button>
      </div>
    )
  }
}

export default HogwartsLetter