import { useState } from "react"
import useLayout from "./useLayout"
import { axiosClient } from "../axios"

const useProducts = () => {

    const { showLoading, hideLoading } = useLayout()
    const [products, setProducts] = useState([])
    const [edit, setEdit] = useState(false)  // este es para mostrar o no el formulario "EDITAR"
    const [editProductFields, setEditProductFields] = useState(null) //este es para guardar la data del producto a editar en un objeto.

    // aca obtengo todos los productos cargados en el back
    const getAllProducts = async () => {
        showLoading()
        try {
            const res = await axiosClient.get('/productos')
            setProducts(res.data)
            hideLoading()
        } catch (error) {
            console.log(error)
            hideLoading()
        }
    }

    // Agregar producto por el formulario
    const saveProduct = async (objeto) => { //va a recibir un objeto (el nuevo producto)
        showLoading()
        try {
            await axiosClient.post('/productos', objeto) // a '/productos' se le agrega el objeto
            await getAllProducts() // se trae el array de todos los productos actualizado
            hideLoading()
        } catch (error) {
            console.log(error)
            hideLoading()
        }
    }

    // editar productos
    const editProduct = async (objeto) => { // va a identificar con id el producto, y luego se le agrega el nuevo objeto modificado.
        showLoading()
        try {
            await axiosClient.put(`/productos/${objeto?.id}`, objeto) // a '/productos'(+ la posicion del id seleccionado), se le agrega el objeto
            await getAllProducts() // se trae el array de todos los productos actualizado
            alert('Producto editado')
            handleResetEditProductFields()
            hideLoading()
        } catch (error) {
            console.log(error)
            hideLoading()
        }
    }

    const handleEditProductFields = (objeto) => {
        setEdit(true) // va a generar que se muestre el form de editar
        setEditProductFields(objeto) // va a tomar el objeto del producto seleccionado
    }

    const handleResetEditProductFields = () => {
        setEdit(false) // va a generar que no se muestre el form edit y el Home se vean los productos.
        setEditProductFields(null) // va a reiniciar el objeto seleccionado
    }

    return {
        products,
        getAllProducts,
        saveProduct,
        edit,
        editProductFields,
        handleEditProductFields,
        handleResetEditProductFields,
        editProduct
    }
}

export default useProducts