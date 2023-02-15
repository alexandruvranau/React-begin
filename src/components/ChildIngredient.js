import React from 'react'

export default function ChildIngredient(props) {
  return (
    <div>
      <button onClick={()=>props.showRecipientHandler('dragon breath')}>Click</button>
    </div>
  )
}
