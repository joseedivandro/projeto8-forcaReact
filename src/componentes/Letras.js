
const alfabeto = [
    { letra: 'A' },
    { letra: 'B' },
    { letra: 'C' },
    { letra: 'D' },
    { letra: 'E' },
    { letra: 'F' },
    { letra: 'G' },
    { letra: 'H' },
    { letra: 'I' },
    { letra: 'J' },
    { letra: 'K' },
    { letra: 'L' },
    { letra: 'M' },
    { letra: 'N' },
    { letra: 'O' },
    { letra: 'P' },
    { letra: 'Q' },
    { letra: 'R' },
    { letra: 'S' },
    { letra: 'T' },
    { letra: 'U' },
    { letra: 'V' },
    { letra: 'W' },
    { letra: 'X' },
    { letra: 'Y' },
    { letra: 'Z' },
];


function Ordem(props) {
    return (
        
        <div class="teclado"> {props.alfabeto.letra}</div>
        
    )
}

export default function Letras() {



    return (

        <div class="organiza">
            {alfabeto.map((a) => (
                <Ordem key={a.letra} alfabeto={a} />

            ))}
            </div>
    )
}