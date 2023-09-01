import React, { useState, useEffect } from "react";
import './ListaDeTarefas.css'
// import icone from './assets/icon.png'


function TudoList() {
    const [novaTarefa, setNovatarefa] = useState('')
    const [lista, setLista] = useState([])

    function adicionarItem(form) {
        form.preventDefault()

        if (!novaTarefa) {
            return
        }

        setLista([...lista, { text: novaTarefa, isCompleted: false }])
        setNovatarefa('')

        document.getElementById("input").focus()
    }

    function marcarCompleto(index) {
        const listaAux = [...lista]
        listaAux[index].isCompleted = !listaAux[index].isCompleted
        setLista(listaAux)
    }
    function deletar(index) {
        console.log('222')
        const listaAux = [...lista]
        // splice para delertar via index
        listaAux.splice(index, 1)
        setLista(listaAux)
    }
    function deletarTudo() {
        setLista([])
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            {/* Adicionar tarefas */}
            <form onSubmit={adicionarItem}>
                <input
                    id="input"
                    type="text"
                    placeholder="Adicione uma tarefa"
                    value={novaTarefa}
                    onChange={(event) => {
                        setNovatarefa(event.target.value)
                    }} />

                <button type="submit" className="btn-add">
                    Adicionar
                </button>
            </form>

            {/* Listar tarefas */}
            <div className="ListaTarefas">
                <div>
                    {lista.map((tarefa, index) => (
                        <div className={tarefa.isCompleted ? "item-completo" : 'item'}
                            key={index}>
                            <span onClick={() => { marcarCompleto(index) }}>
                                {tarefa.text}
                            </span>
                            <button className="btn-deletar" onClick={() => { deletar(index) }}>Deletar</button>
                        </div>
                    ))
                    }
                    {lista.length > 0 && 
                    <button className="btn-deletar-tudo" onClick={() => deletarTudo()}>Deletar Tudo
                    </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default TudoList