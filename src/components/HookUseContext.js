import { createContext } from 'react'

export const SomeContext = createContext() //criacao do contexto

export const HookUseContext = ({children}) => {
    const contextValue = "testing context"

    return (
        <SomeContext.Provider value={{contextValue}}>
            {children}
        </SomeContext.Provider>
    )
} //provider