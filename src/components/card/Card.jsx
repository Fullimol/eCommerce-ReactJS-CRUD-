import React from 'react'
import { AiOutlineHeart, AiFillHeart, AiFillDelete, AiFillEdit } from 'react-icons/ai'


const Card = (props) => {
    const {
        nombre,
        id,
        marca,
        modelo,
        precio,
        addFavorites,
        removeFavorite,
        isInFavorites,
        inFavorites,
        handleEditProductFields
    } = props

    return (
        <div className="card m-1 w-50">
            <div >{nombre}</div>
            <div >{marca}</div>
            <div >{modelo}</div>
            <div >{precio}</div>
            <div className='d-flex justify-content-end px-3'>
                {/* "isInFavorites(id)" sale de "useFavorites.js" y llega hasta acá por props para que con el id del .map() busque en array "favoritos" de "db.js", si el resultado es false o true si está ahí)  */}
                {!inFavorites && isInFavorites(id) && ( //si "inFavorites" no se pasa como prop y "isInFavorites(id)"" es TRUE, se renderizará el siguiente código: (corazon relleno)
                    <span onClick={() => removeFavorite(id)}
                        role={"button"}
                        className="fs-3 text-primary">
                        <AiFillHeart />
                    </span>
                )}
                {!inFavorites && !isInFavorites(id) && ( //si "inFavorites" no se pasa como prop y "isInFavorites(id)"" es FALSE, se renderizará el siguiente código:(corazon vacio)
                    <span
                        onClick={() => addFavorites({ nombre, modelo, precio, marca, id })}
                        role={"button"}
                        className="fs-3 text-warning"
                    >
                        <AiOutlineHeart />
                    </span>
                )}
                {inFavorites && (  // si "inFavorites" es true, entonces mostrá este código (icono tachito)
                    <span onClick={() => removeFavorite(id)}
                        role={"button"}
                        className="fs-3 text-danger">
                        <AiFillDelete />
                    </span>
                )}

                {!inFavorites && <span className='fs-3'> {/* hace que no aparezca el lapiz EDITAR en el array favorito  */}
                    <AiFillEdit onClick={() => handleEditProductFields({ nombre, id, marca, modelo, precio, })} />
                </span>}
            </div>
        </div>
    )
}

export default Card