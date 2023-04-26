import React from 'react'


//useContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

//COMPONENTS
import HooksUseState from '../components/HooksUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'

const Home = () => {
  const { contextValue } = useContext(SomeContext)

  return (
    <div>
        <HooksUseState />
        <HookUseReducer />
        <HookUseEffect />
        <h2>useContext</h2>
        <p>Valor do contexto: {contextValue}</p>
        <hr />
        <HookUseRef />
        <HookUseCallback />
    </div>
  )
}

export default Home