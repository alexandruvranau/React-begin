import React, { Component } from 'react'
//CONDITIONAL RENDERING 
 class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }
  

  render() {
    let message 

    return(
      this.state.isLoggedIn?
      message = <div>Welcome back</div>:
      message = <div>Hello new user</div>
    )

    // let message
    // if(this.state.isLoggedIn){
    //   message = <div>Welcome Vishwa</div>
    // }else{
    //   message = <div>Welcome guest</div>
    // }

    // return(
    //   <div>{message}</div>
    // )

    // if(this.state.isLoggedIn){
    //   return(
    //     <div>Welcome Vishwas </div>
    //   )
    // } else{
    //   return(
    //     <div>Welcome guest </div>
    //   )
    // }
    // return (
    //   <div>
    //     <div>Welcome Vishwas</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
