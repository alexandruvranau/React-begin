import React,{Component}  from "react";

class Invocation extends Component{
  render(){
    return <p>Professor {this.props.teacher} was invoked. He teaches {this.props.discipline}.</p>
  }
}

export default Invocation;