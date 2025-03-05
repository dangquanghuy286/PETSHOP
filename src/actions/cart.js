export const addToCart = (id, info) => {
    return {
        type: "ADD_TO_CART",
        id: id,
        info: info
    }
}
export const updateQuantity = (id, quantity = 1) => {
    return {
        type: "UPDATE_QUANTITY",
        id: id,
        quantity: quantity
    }
}
export const deleteItem = (id) => {
    return {
        type: "DELETE_QUANTITY",
        id: id
    }
}
export const deleteALL = () => {
    return {
        type: "DELETE_ALL",

    }
}