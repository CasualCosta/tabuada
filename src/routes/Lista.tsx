import { Link } from 'react-router-dom'

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Lista = () => {
  return (
    <div className='grid gap-4 w-full md:w-80 md:mx-auto grid-cols-2 px-4 py-4 text-white'>
        {numeros.map((numero, indice) => {
            return <Link 
                to={`tabuada/${numero}`} 
                key={indice}
                className='py-4 text-center bg-sky-600'
            >
                <p>{numero}</p>
            </Link>
        })}
    </div>
  )
}

export default Lista