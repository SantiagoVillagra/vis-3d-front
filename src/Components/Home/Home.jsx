
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/actions";
import Card from '@mui/material/Card';
import FiltersAndOrder from "../FiltersAndOrder/FiltersAndOrder";
//import Card from '../Cards/Card'
import CardContent from '@mui/material/CardContent';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BaseCard from '../Cards/Card'


export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state)=>state.allProducts)
 
    useEffect(() => {
      dispatch(getAllProducts())
      
        
    }, [dispatch])
    
   

  return (
    <div>
      <h1>HOME</h1>
     
      <div>
        <FiltersAndOrder></FiltersAndOrder>
      </div>
      <div>
      { allProducts.map(products => {
            return (
                <BaseCard
                 key={products._id} 
                image={products.image} 
                name={products.name}
                title={products.name}
                description={products.description}
                category={products.category}
                
                />
                
            )
        })}
      </div>
      
    </div>
  );
}
