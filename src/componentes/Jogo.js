import "../style/style.css"
import sortearPalavras from "../sortearPalavras"
import palavras from "../palavras"
import forca0 from "./assets/forca0.png"



export default function Jogo({imagemInicial, setimagemInicial,palavraSorteada,  setPalavraSorteada,jogoEmAndamento, setjogoEmAndamento}) { 

function start(){

    setimagemInicial(forca0)
    setPalavraSorteada(sortearPalavras(palavras))
    setjogoEmAndamento(true)
    
              
        }

    return (

        
        <div className="inicio">
         <img data-test="game-image"  src={imagemInicial} alt =""/>
            <aside>
                <button onClick={start}>
                    <h1>Escolher Palavra</h1>
                </button>
                <p  data-test="choose-word" 
                       data-answer={palavraSorteada[0].naoEscondida}
                       
                    >
                        {palavraSorteada[0].escondida}
                    </p>
               
            </aside>
            </div>
           
    )
}
