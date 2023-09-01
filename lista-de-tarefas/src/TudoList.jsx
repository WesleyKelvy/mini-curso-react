import React, { useState, useEffect } from "react"
import "./TudoList.css"
import icone from './assets/icon.png'

function TudoList() {

    const listaStorage = localStorage.getItem('Lista')

    const [lista, setLista] = useState(listaStorage ? JSON.parse(listaStorage):[])
    const [novoItem, setNovoItem] = useState('')

    useEffect (() => {
        localStorage.setItem('Lista', JSON.stringify(lista))
    }, [lista])

    function adicionarItem(form) {
        //Impedindo de recarregar a página apos submeter o form
        form.preventDefault()
        // Impede a adiçao de Intens vazios a lista
        if (!novoItem) {
            return
        }
        setLista([...lista, { text: novoItem, isCompleted: false }])
        setNovoItem('')
        document.getElementById("input").focus()
    }

    function clicou(index) {
        const listaAux = [...lista]
        // inverte o estado e recebe o css do "item-completo"
        listaAux[index].isCompleted = !listaAux[index].isCompleted
        setLista(listaAux)
    }

    function deleta(index) {
        const listaAux = [...lista]
        // splice para selecionar o index e deletar o item
        listaAux.splice(index, 1)

        setLista(listaAux)
    }

    function deletaTUDO() {
        setLista([])
    }

    return (
        <div>
            <h1>Lista de Tatefas</h1>
            <form onSubmit={adicionarItem}>

                <input
                    id="input"
                    type="text"
                    placeholder="Adicione uma tarefa"
                    value={novoItem}
                    onChange={(e) => { setNovoItem(e.target.value) }} />

                <button type="submit" className="add">
                    Adicionar
                </button>
            </form>


            <div className="ListaTarefas">
                <div>
                    {
                        lista.length < 1
                            ?
                            <div className="icon">
                                <img className="icone"
                                    src={icone}
                                    alt="icone" />
                            </div>
                            :
                            lista.map((item, index) => (
                                <div
                                    key={index}
                                    className={item.isCompleted ? "item-completo" : 'item'}>
                                    <span onClick={() => { clicou(index) }}>{item.text}</span>
                                    <button onClick={() => { deleta(index) }} className="del">Deletar</button>
                                </div>
                            ))
                    }
                    {
                        lista.length > 0 &&
                        <button onClick={() => { deletaTUDO() }} className="deleteAll">Deletar Tudo</button>
                    }
                </div>
            </div>
        </div >
    )
}

export default TudoList