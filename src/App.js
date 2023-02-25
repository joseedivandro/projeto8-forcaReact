import { useState } from "react"
import forca0 from "../src/componentes/assets/forca0.png"


import Jogo from "./componentes/Jogo"
import Letras from "./componentes/Letras"




export default function App() {
    const [numeroDeErros, setNumeroDeErros] = useState(0)
    const [ImagemDaForca, setImagemDaForca] = useState(forca0)
    const [palavraEscolhida, setpalavraEscolhida] = useState([{
        naoEscondida: '________',
        escondida: '________'
    }]
    )
    const [JogoEmAndamento, setJogoEmAndamento] = useState(false)
    const [letraEscolhida, setletraEscolhida] = useState([])
    const [letraFinal, setLetraFInal] = useState('')
    const [Restart, setRestart] = useState(false)


    return (
        <>
            <main>

                <Jogo
                    ImagemDaForca={ImagemDaForca}
                    setImagemDaForca={setImagemDaForca}
                    palavraEscolhida={palavraEscolhida}
                    setpalavraEscolhida={setpalavraEscolhida}
                    JogoEmAndamento={JogoEmAndamento}
                    setJogoEmAndamento={setJogoEmAndamento}
                    setNumeroDeErros={setNumeroDeErros}
                    setRestart={setRestart}
                    
                    setletraEscolhida={setletraEscolhida}
                    letraFinal={letraFinal}
                    setLetraFinal={setLetraFInal}
                    

                />
                <Letras
                    JogoEmAndamento={JogoEmAndamento}
                    setJogoEmAndamento={setJogoEmAndamento}
                    palavraEscolhida={palavraEscolhida}  
                    setpalavraEscolhida={setpalavraEscolhida}
                    setImagemDaForca={setImagemDaForca}
                    numeroDeErros={numeroDeErros}
                    setNumeroDeErros={setNumeroDeErros}
                    Restart={Restart}
                    
                    setRestart={setRestart}
                    letraEscolhida={letraEscolhida}
                    
                    setletraEscolhida={setletraEscolhida}
                    letraFinal={letraFinal}
                    setLetraFinal={setLetraFInal}
                   
                />
            </main>

        </>
    );
}