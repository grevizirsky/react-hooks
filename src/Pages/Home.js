import React from 'react'

import HooksUseState from '../components/HooksUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'

const Home = () => {
  return (
    <div>
        <HooksUseState />
        <HookUseReducer />
        <HookUseEffect />
    </div>
  )
}

export default Home