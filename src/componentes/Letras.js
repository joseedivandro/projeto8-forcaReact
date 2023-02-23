
import BotaoLetra from "./teclado"
export default function Letras({jogoEmAndamento, setjogoEmAndamento, palavraSorteada, setPalavraSorteada, numeroDeErros, setNumeroDeErros, setImagemDaForca, jogoFoiReiniciado, setChuteConteudo, setJogoFoiReiniciado, letrasChutadas, setLetrasChutadas, setUsuarioGanhou, setCorDoChute}) {
    const alfabeto = ["A","B","C","D","E","F","G","H","I","J", "K","L","M","N","O","P","Q","R","S","T",
                      "U","V","W","X","Y","Z"];                                      
                      
    return(
        <>
            <div className="letrasEstilo">
                {alfabeto.map((letra) => {
                    return (<BotaoLetra key={letra} 
                                        letra={letra} 
                                        jogoEmAndamento={jogoEmAndamento}
                                        setjogoEmAndamento={setjogoEmAndamento}
                                        palavraSorteada={palavraSorteada}
                                        setPalavraSorteada={setPalavraSorteada}
                                                 
                                        />)
                })}
            </div>
        </>
    )
}