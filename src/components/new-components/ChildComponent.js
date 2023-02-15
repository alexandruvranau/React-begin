import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
      <button onClick={()=>props.notifyHandler('child')}>Click me</button>
    </div>
  )
}
