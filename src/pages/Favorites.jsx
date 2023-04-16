import React, { useContext } from 'react'
import Card from '../components/card/Card'
import { ProductContext } from '../context/ProductProvider'

const Favorites = () => {

  const { favorites, isInFavorites, addFavorites, removeFavorite } = useContext(ProductContext) // ACA se traen todos export y se van pasando por props a los hijos Ya que estos vienen del proveedor. De otro modo no funcionarian

  return (
    <div className='container d-flex flex-column align-items-center'>
      <h1>Productos en Favoritos</h1>
      {favorites?.map((favorit) => (
        <Card
          key={favorit.id}  // agrego "key" y le digo que sea el id de product, con "{...product}" pasa cada valor del objeto a las props del mismo nombre (ej: name={name})
          {...favorit}
          addFavorites={addFavorites}
          removeFavorite={removeFavorite}
          isInFavorites={isInFavorites} 
          inFavorites // !IMPORTANTE, acá agrego este props para verificar si el objeto está en favoritos, entonces le cambio el ico de corazón a tachito para eliminar
        /> 
      ))}

    </div>
  )
}

export default Favorites