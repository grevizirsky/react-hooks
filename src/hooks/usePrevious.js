import {useEffect, useRef} from 'react'

export const usePrevious = (value) => {
    const ref = useRef()

    useEffect(() => {
        ref.current = value
    })

    //salva o valor antigo

    return ref.current
}