import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { FaAngleRight, FaAngleLeft, FaAnglesLeft } from 'react-icons/fa6'
import { number } from 'prop-types'
import { Link } from 'react-router-dom'
import Alternativa from './Alternativa'

const parcelas = [1,2,3,4,5,6,7,8,9,10]
const letras = ["a", "b", "c", "d", "e"]
const total = 10
const Tabuada = () => {
  const [atual, setAtual] = useState<number>(0) //Índice
  const [corretas, setCorretas] = useState<number>(0) //Quantidade 
  const [parcela, setParcela] = useState(Math.floor(Math.random() * 9 + 1))
  const [escolha, setEscolha] = useState<number>(-1)
  const [certa, setCerta] = useState(Math.floor(Math.random() * 5)) //Índice
  const valor:number = parseInt(useParams().tabuadaId!)
  const resultado = valor * parcela
  
  const setAlts = (): Array<number> => {
    const alts: number[] = []
    for(let i = 0; i < 5; i++){
      if(i === certa){
        alts.push(resultado)
        continue
      }
      let alternativa
      do {
        alternativa = Math.floor(Math.random() * 9 + 1) * valor
      } while (alternativa === resultado)
        alts.push(alternativa)
      }
      return alts
    }
    const [alternativas, setAlternativas] = useState<number[]>(setAlts())

  const marcarResposta = (alt: number, indice: number) => {
    return function (){
      const flag = alt === resultado
      setEscolha(indice)
      if(flag){
        setCorretas(corretas + 1)
      }
    }
  }

  const avancarQuestionario = () => {
    setAtual(atual + 1)
        setCerta(Math.floor(Math.random() * 5))
        setEscolha(-1)
        setParcela(Math.floor(Math.random() * 9 + 1))
  }
  
  useEffect(() => {
    setAlternativas(setAlts())
  }, [parcela])

  if(atual === 0)
    return (
      <section className='text-white text-center flex flex-col items-center gap-12'>
        <div className='bg-sky-600  px-8 text-2xl py-2 rounded'>{`Tabuada do ${valor}`}</div>
        <div className='grid grid-rows-5 grid-flow-col gap-2 text-white items-center justify-center text-center w-2/3 mx-auto'>
          {parcelas.map((parcela, indice) => {
            return <p key={indice} className='bg-sky-600/80 py-4 w-28 md:w-64 rounded'>{`${valor} x ${parcela} = ${valor * parcela}`}</p>
          })}
        </div>
        <div className='flex gap-8'>
          <Link to={'/'} className='bg-violet-600 uppercase px-4 py-4 rounded-full  hover:scale-125'><FaAngleLeft /></Link>
          <button 
            className='bg-sky-600 uppercase px-4 py-4 rounded-full  hover:scale-125'
            onClick={() => setAtual(1)}
            ><FaAngleRight />
          </button>
        </div>
      </section>
    )
  if(atual <= total){
    return <div>
      <p className={`my-4 text-center bg-teal-700  w-48 mx-auto text-white p-4 text-2xl rounded`}>
        {atual}. {valor} x {parcela} = ?
      </p>
      <div className='flex flex-col gap-4 items-center'>
        {alternativas.map((alt, index) => {
          return <button 
            key={index} 
            disabled={escolha > -1}
            onClick={marcarResposta(alt, index)}
            className={`bg-sky-600 
              ${escolha > -1  && alt === resultado ?
                  'bg-teal-700' : 
                  index === escolha ? 
                    'bg-red-600' :
                "bg-sky-600"} 
                w-2/3 md:w-80 text-white py-4 rounded relative ${escolha < 0 ?"hover:scale-105" : ""}`}
          >
            <p className='absolute left-8'>
            {`${letras[index]}.`}
            </p>
            {alt}
          </button>
        })}
        { escolha > -1 && <button 
          className='bg-sky-600 mt-8 aspect-square text-white h-12 rounded-full flex items-center justify-center  hover:scale-125'
          onClick={avancarQuestionario}
        >
          <FaAngleRight />
        </button>}
      </div>
      <Link to={"/"} className='absolute bottom-4 left-4 rounded w-32 bg-sky-600 text-white text-xl text-center p-4 flex items-center justify-center gap-2 uppercase  hover:scale-110'>
          <FaAnglesLeft />
          Voltar
      </Link>
    </div>
  }
  return (
    <section className='flex flex-col items-center h-5/6'>
      <div className='flex flex-col gap-2 justify-center items-center text-white text-center grow-1 bg-sky-600 mx-8 my-24 px-4 py-8 rounded-lg'>
        <p className='text-2xl'>Respostas corretas:</p>
        <p className='text-4xl'>{`${corretas}/${total}`}</p>
      </div>
      <Link to={"/"} className='text-white bg-sky-600 rounded-full p-4  hover:scale-110'><FaAnglesLeft size={48} /></Link>
    </section>
  )
}

export default Tabuada