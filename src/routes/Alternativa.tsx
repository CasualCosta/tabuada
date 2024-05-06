import React from 'react'

type Props = {
    valor: number,
    funcao: void
}
const Alternativa:React.FC<Props> = ({valor, funcao}:Props) => {

    return (
        <button
            onClick={() => funcao}
        >
            {valor}
        </button>
    )
}

export default Alternativa