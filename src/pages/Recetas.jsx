import React from 'react'
import CardReceta from '../components/CardReceta/CardReceta.jsx'
import recetas from '../assets/recetas.json'
import './Recetas.css'

const Recetas = () => {
  return (
    <div  className='padre'>
        {
            recetas.map((receta, idx)=>{
                return(
                    <CardReceta 
                        key={idx}
                        name={receta.nombre}
                        ingrds={receta.ingredientes}
                        time={receta.tiempo_preparacion}
                    />

                )
            })
        }
    </div>
  )
}

export default Recetas