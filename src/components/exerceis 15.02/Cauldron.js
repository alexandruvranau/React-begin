import React, { Component } from 'react'
import Mushroom from 'react'
import DragonScale from 'react'
import HolyWater from 'react'



 class Cauldron extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

  render() {
    return (
      <div>
        <button>Click</button>
        <Mushroom/>
        <DragonScale/>
        <HolyWater/>

      </div>
    )
  }
}

export default Cauldron
