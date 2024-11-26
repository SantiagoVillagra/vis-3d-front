import { GETALLPRODUCTS } from "./actionsTypes"
import axios from "axios"

export  const getAllProducts = () =>{
    
    return function(dispatch){
        axios.get('https://backend-vis3d.onrender.com/products')
        .then(({data}) => dispatch({type: GETALLPRODUCTS, payload: data}))
    }

}


