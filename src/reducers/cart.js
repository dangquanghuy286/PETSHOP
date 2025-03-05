const cartReducer = (state = [], action) => {
    let newState = [...state];
    switch (action.type) {
        case "ADD_TO_CART":
            return [
                ...state,
                {
                    id: action.id,
                    info: action.info,
                    quantity: 1
                }
            ];

        case "UPDATE_QUANTITY":
            // eslint-disable-next-line no-case-declarations
            const updateItem = newState.find(item => item.id === action.id);
            if (updateItem) {
                updateItem.quantity += action.quantity;
            }
            return newState;

        case "DELETE_QUANTITY":
            newState = newState.filter(item => item.id !== action.id);
            return newState;

        case "DELETE_ALL":
            return [];

        default:
            return state;
    }
}
export default cartReducer;
