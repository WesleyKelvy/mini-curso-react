import { useState } from 'react'

//let nome = "WESLEY KELVY"
//const urlImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"

export default function Titulo({ cor }) {
    const [texto, setTexto] = useState("Titulo inicial")
    const [inputText, setInputText] = useState("")

function clicou(){
    setTexto(inputText)
}
    return (
        <div>
            <h1 style={{ color: cor }}>{texto}</h1>
            <input type="text"value={inputText} onChange={(e) => { setInputText(e.target.value) }} />
            <button onClick={clicou}>Mudar</button>
            {/* Oi eu sou {nome ? nome : "Fulanin"} */}
            {/* <img width={100} src={urlImg} alt="imagem" /> */}
            {/* {paragrafo ?
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima magnam velit dolore. Fuga id repellat dolores molestias laudantium aliquid, doloribus, ut maiores rem autem quisquam reiciendis. Id, iste tempora.
                </p>
                :
                <p>Nada.....</p>
            } */}
        </div>
    )
}