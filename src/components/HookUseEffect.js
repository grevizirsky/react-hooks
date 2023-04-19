import {useEffect, useState} from 'react'

const HookUseEffect = () => {
    //1 - useEffect sem dependencias - loading do componente
    useEffect(() => {
        console.log("Estou sendo executado");
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    //2 - array de dependencia vazio - executado apenas quando ocorre o loading da pagina
    useEffect(() => {
        console.log("serei executado apenas uma vez")
    }, [])

    //3 - item no array de dependencia - executado quando a dependencia muda
    const [anotherNumber, setAnotherNumber] = useState(0)
    
    useEffect(() => {
        if(anotherNumber > 0){
            console.log("Sou executado apenas quando o anotherNumber muda")
        }
    }, [anotherNumber])

    //4 - cleanup do useEffect
    useEffect(() => {
        // const timer = setTimeout(() => {
        //     console.log("Hello world")

        //     //setAnotherNumber(anotherNumber + 1)
        // }, 2000)

        // return () => clearTimeout(timer) //--cleanUp
    }, [anotherNumber])


  return (
    <div>
        <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Executar</button>
        <p>Another number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumebr</button>
        <hr />
    </div>
  )
}

export default HookUseEffect