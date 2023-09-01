import Titulo from "./Titulo";

function App() {
    return (
        <div>
            <Titulo nome="Wesley GG" paragrafo = {true} cor="red"/>
            <Titulo cor="purple" />
            <Titulo cor="blue" />
            <Titulo cor="orange"/>
        </div>
    )
}

export default App