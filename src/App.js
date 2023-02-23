import { useState } from "react"
import forca0 from "../src/componentes/assets/forca0.png"


import Jogo from "./componentes/Jogo"
import Letras from "./componentes/Letras"



export default function App() {
    
    const [imagemInicial, setimagemInicial] = useState(forca0)
    const [palavraSorteada, setPalavraSorteada] = useState([{
        naoEscondida: '________',
        escondida: '________'
    }]
    )
    const [jogoEmAndamento, setjogoEmAndamento] = useState(false)
   
     
    return (
        <>
            <main>

                <Jogo
                    imagemInicial={imagemInicial}
                    setimagemInicial={setimagemInicial}
                    palavraSorteada={palavraSorteada}
                    setPalavraSorteada={setPalavraSorteada}
                    jogoEmAndamento={jogoEmAndamento}
                    setjogoEmAndamento={setjogoEmAndamento}  
                    
                />
                <Letras
                    jogoEmAndamento={jogoEmAndamento}
                    setjogoEmAndamento={setjogoEmAndamento}
                    setPalavraSorteada={setPalavraSorteada}
                    setimagemInicial={setimagemInicial}
                   
                   
                />
            </main>

        </>
    )
}