import { GETALLPRODUCTS } from "./actionsTypes";

const initialState = {
    allProducts: []
}

const rootReducer = (state= initialState, {type, payload}) => {

    switch (type) {
        case GETALLPRODUCTS:
            return {
                ...state,
                allProducts: payload
            }
    
        default:
            return {
                ...state
            }
            break;
    }
}

export default rootReducer