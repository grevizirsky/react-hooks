import {useEffect, useRef, useDebugValue} from 'react'

export const usePrevious = (value) => {
    const ref = useRef()

    useDebugValue("--- CUSTOM HOOK E USE_DEBUG_VALUE---")
    useDebugValue("O numero anterior é: " + value)

    useEffect(() => {
        ref.current = value
    })

    //salva o valor antigo

    return ref.current
}