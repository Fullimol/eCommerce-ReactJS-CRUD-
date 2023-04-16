import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductProvider'
import Card from '../components/card/Card'
import { AiFillCloseCircle } from 'react-icons/ai'
import Formulario from '../components/formulario/Formulario'

const Home = () => {

  const { products, isInFavorites, addFavorites, removeFavorite, edit, handleEditProductFields, handleResetEditProductFields, editProductFields } = useContext(ProductContext) // ACA se traen todos export y se van pasando por props a los hijos Ya que estos vienen del proveedor. De otro modo no funcionarian

  return (
    <div className='container d-flex flex-column align-items-center'>
      {edit ? <div className='container'>
        <span className='d-flex justify-content-end w-75 fs-3'><AiFillCloseCircle onClick={handleResetEditProductFields} /></span>
        <h1 className='text-center'>Editar producto</h1> 
        <Formulario edit={edit} initialState={editProductFields} buttonText={"editar"} />
      </div> : <h1>Productos en Stock</h1>}  {/*si "edit" es true mostrar el modo editar, sino lo otro*/}

      {!edit && products?.map((product) => (
        <Card key={product.id} {...product} // agrego "key" y le digo que sea el id de product, con "{...product}" pasa cada valor del objeto a las props del mismo nombre (ej: name={name})
          addFavorites={addFavorites}
          removeFavorite={removeFavorite}
          isInFavorites={isInFavorites}
          handleEditProductFields={handleEditProductFields}
        />
      ))}

    </div>
  )
}

export default Home