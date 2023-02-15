import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       parentName: 'Parent'
    }
    this.notifyParent = this.notifyParent.bind(this)
  }

  notifyParent(childName){
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }
  

  render() {
    return (
      <div>
        <ChildComponent notifyHandler={this.notifyParent}/>  
      </div>
    )
  }
}

export default ParentComponent
