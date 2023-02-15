import React from 'react'



export default function Welcome(props) {

 

  return (
    <div>
      <h1>Hello there {props.name}</h1>
      <button>Change name</button>
    </div>
  )
}
