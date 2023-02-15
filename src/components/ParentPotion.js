import React, { Component } from 'react'
import ChildIngredient from './ChildIngredient'


  

 class ParentPotion extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
    name: 'fire'   
    }
    this.showRecipie = this.showRecipie.bind(this)

  }


  showRecipie(ingredient){
    alert(`This potion is ${this.state.name} potion and made from ${ingredient}`)
  }

  render() {
    return (
      <div>
        <ChildIngredient showRecipientHandler={this.showRecipie}/>

      </div>
    )
  }
}

export default ParentPotion
