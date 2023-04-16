import React, { useContext } from 'react'
import useFormulario from '../../hooks/useFormulario'
import Input from '../../shared/Input'
import { defineInputType, defineIsRequired, defineIsDisabled } from '../../helper'
import { ProductContext } from '../../context/ProductProvider'


const Formulario = (props) => {
    const { initialState, buttonText = "submit", buttonClassName = "btn btn-primary", edit } = props
    const { saveProduct, editProduct } = useContext(ProductContext)
    const { form, handleChange } = useFormulario(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (edit) { //si edit es true (existe el formulario editar) entonces... ejecuta la funcion editar
            editProduct(form) 
            return
        } else {
            saveProduct(form) //si edit es false (osea, no esta en el formulario de editar) entonces... ejecuta la funcion guardar
            alert("producto agregado")
        }
        

    }

    return (
        <form onSubmit={handleSubmit} className='w-50 mx-auto'>
            {// "Object.entries()"" toma un objeto y lo convierte en un array de pares clave-valor.
                Object.entries(form).map(([key, value]) => ( //hago destructuración de la key y value para no poner "initial[0]"
                    <Input required={defineIsRequired(key)}
                        type={defineInputType(key)}
                        key={key}
                        name={key}
                        value={value}
                        onChange={handleChange}
                        disabled={defineIsDisabled(key)}
                    />
                ))
            }
            <button type="submit" className={buttonClassName}>{buttonText}</button>
        </form>
    )
}

export default Formulario