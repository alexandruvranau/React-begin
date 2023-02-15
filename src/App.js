
import Summoning from './components/Summoning';
import { render } from '@testing-library/react';
import Invocation from './components/Invocation';
import Conjuration from './components/Conjuration';
import React from 'react';
import HogwartsLetter from './components/HogwartsLetter';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import Welcome from './components/new-components/Welcome';
import ParentComponent from './components/new-components/ParentComponent';
import UserGreeting from './components/new-components/UserGreeting';
import ParentPotion from './components/ParentPotion';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  // const person = {name: 'yoshi', age: 30}
  const link = "http://www.google.com"
  
  return (
    <Router>
      <div className="App">
        {/* <ParentPotion/> */}
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
        {/* <Welcome name='Alex'/> */}









        {/* <Navbar />
        <div className='content'>
          <Switch>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>  */}
      </div>
    </Router>
  );
}

export default App;

//differences between Function Based and Class Based COMPONENTS
//1.syntax
//2. has state (class-based components) must manage states through usedState Hook
//3. this key word present only in class-based components 

//JSX DIFFERENCES
//class->className
//for -> htmlFor
//onclick -> onClick

//Differences between PROPS and STATE
//1. PROPS gets passed to the component and STATE is managed within the component 
//2. PROPS is immutable, STATE is mutable 
//3. Syntax:   
//I.PROPS a. Functional-based components-PROPS; b. Class-based components-this.props; 
//II. STATE a. Functional-based components-HOOK useState; b. Class-based components-this.state; 


//to reuse after course
      {/* <HogwartsLetter/> */}
      {/* <Summoning teacher='Severus Snape' discipline='Potion' />
      <Summoning teacher='Dumbledore' />
      <Summoning teacher='Remus Lupin' /> */}
      {/* <Invocation />
      <Conjuration /> */} 
      {/* <Invocation teacher='Severus Snape' discipline='Potion' />
      <Invocation teacher='Dumbledore' discipline='Transfiguration' />
      <Invocation teacher='Remus Lupin' discipline='Dark arts' /> */}