
import "../style/style.css"
import forca0 from "./assets/forca0.png"

export default function Jogo({imagemInicial, setImagemInicial}) {

    function start(){
        setImagemInicial(forca0)
        
    }

    
    return (
        <div class="inicio">
         <img class ="forca" src={imagemInicial}/>
            <aside>
                <button onClick={start}>
                    <p>Escolher Palavra</p>
                </button>
            </aside>
            </div>
    )
}
