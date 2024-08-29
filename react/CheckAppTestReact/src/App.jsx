import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting/Greeting'
import Counter from './components/Counter/Counter'
import NameList from './components/NameList/NameList'

import { names } from './components/NameList/names'


function App() {

  return (
    <>
      <Greeting name="Bryan"></Greeting>
      <h2> I&apos;m Sandrine Mestas Gleizes, test pour &quot;Check App&quot; : React part</h2>
      <section>
        <article>
          <h3> Task 1: Functional Component : </h3>
          <p> présenter en H1 de cette page </p>
        </article>
        
        <article>
          <h3> Task 2: State Management</h3>
          <p>cliquer sur le bouton ci-dessous :</p>
          <Counter></Counter>
        </article>
        
        <article>
          <h3> Task 3: List Rendering</h3>
          <p>Voici un rendu d&apos;une liste : </p>
          <NameList names={names}></NameList>
          
        </article>
      </section>     
    </>
  )
}

export default App
