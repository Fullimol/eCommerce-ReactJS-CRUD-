import React, { useEffect } from 'react'
import { createContext } from 'react'
import useLayout from '../hooks/useLayout'
import useProducts from '../hooks/useProducts'
import useFavorites from '../hooks/useFavorites'


export const ProductContext = createContext('')

const ProductProvider = ({ children }) => {

    const { loading } = useLayout()
    const { products, getAllProducts, saveProduct, edit, editProductFields, handleEditProductFields, handleResetEditProductFields, editProduct } = useProducts()
    const { favorites, getAllFavorites, isInFavorites, addFavorites, removeFavorite } = useFavorites()

    useEffect(() => {
        getAllProducts()
    }, [])


    return (
        <ProductContext.Provider value={{
            loading,
            products,
            getAllProducts,
            getAllFavorites,
            favorites,
            isInFavorites,
            addFavorites,
            removeFavorite,
            saveProduct,
            edit,
            editProductFields,
            handleEditProductFields,
            handleResetEditProductFields,
            editProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider