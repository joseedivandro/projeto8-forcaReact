import {useState} from "react"
import styled from "styled-components"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"



export default function BotaoLetra({letra, JogoEmAndamento, setJogoEmAndamento, palavraEscolhida, setpalavraEscolhida, numeroDeErros, setNumeroDeErros, setImagemDaForca, letraEscolhida, setletraEscolhida, Restart,  setRestart, setLetraFinal }) {

    const [Clicado, setClicado] = useState(false);
    const imagensdaForca = [
        forca0,
        forca1,
        forca2,
        forca3,
        forca4,
        forca5,
        forca6,
      ];

    function verificaChute() {

        setRestart(false)

        if(letraEscolhida.includes(letra)) {
            return
        }

        setletraEscolhida([...letraEscolhida, letra])
        
        const palavraEscolhidaNaoEscondida = Array.from(palavraEscolhida[0].naoEscondida)
        const letraParaComparar = letra.toLowerCase()

        setClicado(true)
        
        if(palavraEscolhidaNaoEscondida.includes(letraParaComparar)) {
            let palavraLength = [...Array.from(palavraEscolhida[0].escondida)]

            palavraLength = palavraLength.map((letra,index) => {
                if(palavraEscolhidaNaoEscondida[index]===letraParaComparar) {
                    return palavraEscolhidaNaoEscondida[index]
                }
                return letra
            })
            palavraLength = palavraLength.join('') 
            
            if(palavraLength === palavraEscolhida[0].naoEscondida) {
                setJogoEmAndamento(false)
                setletraEscolhida([]) 
                setLetraFinal('#27AE60')
               
            }

            palavraLength = formatapalavraLength(palavraLength) 
            setpalavraEscolhida(palavraLength)                  
        } else {
            erros()
        }
    }

    function formatapalavraLength(palavraLength) {
        return [{
            naoEscondida: palavraEscolhida[0].naoEscondida,
            escondida: palavraLength
        }]
    }

    function erros() {
        const numeroDeErrosDoUsuario= numeroDeErros + 1
        const totalErrosParaMorte = imagensdaForca.length

        if(numeroDeErrosDoUsuario=== totalErrosParaMorte - 1) {
            setpalavraEscolhida(formatapalavraLength(palavraEscolhida[0].naoEscondida))
            setJogoEmAndamento(false)
            setletraEscolhida([]) 
            setLetraFinal('#FF0000')
            
            
           
        }

        if(numeroDeErrosDoUsuario< totalErrosParaMorte) {
            setNumeroDeErros(numeroDeErrosDoUsuario)
            setImagemDaForca(imagensdaForca[numeroDeErrosDoUsuario])
            return false
        }
    }

    function fimDoJogo() {
        if(Restart) {
            setClicado(false)
        }
        return true
    }

    return(
            <StyledButton className={((!JogoEmAndamento || (Clicado?fimDoJogo():false))?"botao-desativado":"")} 
                          disabled={((!JogoEmAndamento || (Clicado?fimDoJogo():false))?true:false)}
                          onClick={(() => verificaChute())}
                          data-test="letter"                                        
            >
                {letra}
            </StyledButton>
    )
}

const StyledButton = styled.button`
box-sizing: border-box;
    width: 40px;
    height: 40px;
    font-weight: bold;
    font-size: 16px;
    background: #E1ECF4;
    border: 1px solid #7AA7C7 !important;
    color: #39739D;
    border-radius: 3px;
    margin-left: 6px;
    margin-top: 10px;    
    &.botao-desativado {
        background: #798A9F !important;
        color: #6b7075 !important;
    }
    
    `;