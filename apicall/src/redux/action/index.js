export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }

}

export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }

}

export const decCart = (product) => {
    return {
        type: "DECCART",
        payload: product
    }

}
export const clrCart = (product) => {
    return {
        type: "CLRCART",
        payload: product
    }

}
export const totalCart = (product) => {
    return {
        type: "PTOTAL",
        payload: product
    }

}

export const incCart = (product) => {
    return {
        type: "INCCART",
        payload: product
    }

}