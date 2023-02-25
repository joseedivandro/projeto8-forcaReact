import "../style/style.css"
import sortearPalavras from "../sortearPalavras"
import palavras from "../palavras"
import forca0 from "./assets/forca0.png"
import styled from "styled-components"



export default function Jogo({ImagemDaForca, setImagemDaForca,palavraEscolhida,setNumeroDeErros,  setpalavraEscolhida,JogoEmAndamento, setJogoEmAndamento, setRestart, setletraEscolhida, setLetraFinal, letraFinal}) { 

function start(){

    setImagemDaForca(forca0)
    setpalavraEscolhida(sortearPalavras(palavras))
    setJogoEmAndamento(true)
    setNumeroDeErros(0)
    setRestart(true)  
    setletraEscolhida([]) 
    setLetraFinal('')
    
              
        }

        console.log(palavraEscolhida[0].naoEscondida)

    return (

        
        <div className="inicio">
         <img data-test="game-image"  src={ImagemDaForca} alt =""/>
            <aside>
                <button data-test="choose-word" onClick={start}>
                    <h1>Escolher Palavra</h1>
                </button>

                <Palavra>
                <p  data-test="word" 
                       data-answer={palavraEscolhida[0].naoEscondida}
                       style={{color:letraFinal}}
                    >
                        {palavraEscolhida[0].escondida}
                    </p>
                    </Palavra>
               
            </aside>
            </div>
           
    )
}


const Palavra = styled.div `

color: if()
`