
import BotaoLetra from "./teclado"
export default function Letras({JogoEmAndamento, setJogoEmAndamento, palavraEscolhida, setpalavraEscolhida, numeroDeErros, setNumeroDeErros, setImagemDaForca, Restart,  setRestart, letraEscolhida, setletraEscolhida, setLetraFinal}) {
    const alfabeto = ["A","B","C","D","E","F","G","H","I","J", "K","L","M","N","O","P","Q","R","S","T",
                      "U","V","W","X","Y","Z"];                                      
                      
    return(
        <>
            <div className="letrasEstilo">
                {alfabeto.map((letra) => {
                    return (<BotaoLetra key={letra} 
                                        letra={letra} 
                                        JogoEmAndamento={JogoEmAndamento}
                                        setJogoEmAndamento={setJogoEmAndamento}
                                        palavraEscolhida={palavraEscolhida}
                                        setpalavraEscolhida={setpalavraEscolhida}
                                        numeroDeErros={numeroDeErros}
                                        setNumeroDeErros={setNumeroDeErros}
                                        setImagemDaForca={setImagemDaForca}
                                        letraEscolhida={letraEscolhida}
                                        setletraEscolhida={setletraEscolhida}
                                        Restart={Restart}
                                        setLetraFinal={setLetraFinal}
                                        setRestart={setRestart} 
                                                 
                                        />)
                })}
            </div>
        </>
    )
}