import React from 'react'
import Formulario from '../components/formulario/Formulario'

const Producto = () => {
  const initialState = {
    nombre: '',
    marca: '',
    modelo: '',
    precio: ''
}

  return (
    <div className='container d-flex flex-column align-items-center'>
      <h1>Agregar Producto</h1>
      <Formulario initialState={initialState} buttonText={"Agregar"}/>
    </div>
  )
}

export default Producto