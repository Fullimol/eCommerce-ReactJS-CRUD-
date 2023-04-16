import { useEffect, useState } from 'react'
import { axiosClient } from '../axios'
import useLayout from './useLayout'

const useFavorites = () => {
    const [favorites, setFavorites] = useState([]) //aca guardo los favoritos
    const { showLoading, hideLoading } = useLayout()


    // aca obtengo todos los productos que han sido guardados en "favoritos" en el backend y los guardo en el useState
    const getAllFavorites = async () => {
        showLoading()
        try {
            const res = await axiosClient.get('/favoritos')
            setFavorites(res.data)
            hideLoading()
        } catch (error) {
            console.log(error)
            hideLoading()
        }
    }

    //esta funcion busca si existe el id en el array y da un resultado true / false
    const isInFavorites = (id) => favorites.some((favorito) => favorito.id == id)

    //esta funcion hace un POST a la base de datos y agrega el objeto mediante un onClick
    const addFavorites = async (objeto) => {
        showLoading()
        try {
            const res = await axiosClient.post('favoritos', objeto) //hace un post EN "favoritos" y agrega el objeto que le paso.
            getAllFavorites() //traigo todo el array de favoritos actualizada. Hace que el cambio se visualice al instante.
            hideLoading()
        } catch (error) {
            console.log(error)
            hideLoading()
        }
    }

    const removeFavorite = async (id) => {
        showLoading()
        try {
            const res = await axiosClient.delete(`/favoritos/${id}`) // elimina de favoritos
            getAllFavorites() //traigo todo el array de favoritos actualizada. Hace que el cambio se visualice al instante.
            hideLoading()
        } catch (error) {
            console.log(error)
            hideLoading()
        }
    }


    // importante para que traiga la data de la base de datos. Sin esto no lo hace.
    useEffect(() => {
        getAllFavorites()
    }, [])


    return {
        getAllFavorites,
        favorites,
        isInFavorites,
        addFavorites,
        removeFavorite
    }
}

export default useFavorites