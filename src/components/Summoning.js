import React from 'react'
import Conjuration from './Conjuration';


// DEFAULT EXPORT
const  Summoning = props =>{
  console.log(props);
  // props.teacher = 'Boulder Mort';

  return (
    <div>
      <p>Professor {props.teacher} is the {props.discipline} Teacher</p>
     <Conjuration />
    </div>
  )
}

export default Summoning;

//NAMED EXPORT
// export const Summoning = ()=> <p>Professor Snape is the Potions Teacher</p>

