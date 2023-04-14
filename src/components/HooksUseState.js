import {useState} from 'react'

const HooksUseState = () => {
    //1 - useState
    let userName = "João"
    
    const [name, setName] = useState("Adriano")

    const changeNames = () => {
        userName = "João Souza"

        setName("Adriano Grevizirsky")
    }

    //2 - useState e input
    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(age)
    }

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>Variavel: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nomes</button>
        {/* 2 - useState e input */}
        <p>Digite a sua idade</p>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={age} 
                onChange={(e) => setAge(e.target.value)}
            />
            <input type="submit" value="Enviar" />
        </form>
        <p>Voce tem {age} anos!</p>
        <hr/>
    </div>
  )
}

export default HooksUseState