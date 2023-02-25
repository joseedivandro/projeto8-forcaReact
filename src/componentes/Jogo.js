import "../style/style.css"
import sortearPalavras from "../sortearPalavras"
import palavras from "../palavras"
import forca0 from "./assets/forca0.png"



export default function Jogo({ImagemDaForca, setImagemDaForca,palavraEscolhida,setNumeroDeErros,  setpalavraEscolhida,JogoEmAndamento, setJogoEmAndamento, setRestart, setletraEscolhida}) { 

function start(){

    setImagemDaForca(forca0)
    setpalavraEscolhida(sortearPalavras(palavras))
    setJogoEmAndamento(true)
    setNumeroDeErros(0)
    setRestart(true)  
    setletraEscolhida([]) 
              
        }

        console.log(palavraEscolhida[0].naoEscondida)

    return (

        
        <div className="inicio">
         <img data-test="game-image"  src={ImagemDaForca} alt =""/>
            <aside>
                <button data-test="choose-word" onClick={start}>
                    <h1>Escolher Palavra</h1>
                </button>
                <p  data-test="word" 
                       data-answer={palavraEscolhida[0].naoEscondida}
                       
                    >
                        {palavraEscolhida[0].escondida}
                    </p>
               
            </aside>
            </div>
           
    )
}
