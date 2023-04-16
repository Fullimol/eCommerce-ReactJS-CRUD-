export const defineInputType = (string) => {
    switch (string) { // va a recibir un string
        case 'precio': // en caso de que el string diga "precio"
            return "number" // su type será un número
        default:
            return "text" // de lo contrario, su type sera texto
    }
}

export const defineIsRequired = (string) => { //define que input es requerido
    switch (string) {
        case 'precio':
            return true
        case 'marca':
            return true
        default:
            return false;
    }
}

export const defineIsDisabled = (string) => { //define que input se debe bloquear para ser modificado
    switch (string) {
        case 'id':
            return true
        default:
            return false;
    }
}