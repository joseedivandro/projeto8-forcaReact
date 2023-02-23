import {useState} from "react"
import styled from "styled-components"

export default function BotaoLetra({letra, jogoEmAndamento, setjogoEmAndamento, palavraSorteada, setPalavraSorteada, jogoFoiReiniciado}) {

    const [Clicado, setClicado] = useState(false)
     
    function fimDoGame() {
        if(jogoFoiReiniciado) {
            setClicado(false)
        }
        return true
    }

    return(
            <FormatoBotao className={((!jogoEmAndamento || (Clicado?fimDoGame():false))?"botao-desativado":"")} 
                          disabled={((!jogoEmAndamento || (Clicado?fimDoGame():false))?true:false)}
                          data-test="letter"                                        
            >
                {letra}
            </FormatoBotao>
    )
}

const FormatoBotao = styled.button`
    width: 40px;
    height: 40px;
    margin: 2px 2px;   
  
    font-size: 16px;
    background: #E1ECF4;
    font-weight: 700;
    color: #39739D;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
    
    &.botao-desativado {
        background: #798A9F;
        color: #6b7075;
    }
    
    `;