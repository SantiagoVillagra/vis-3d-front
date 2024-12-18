
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/actions";

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
      { allProducts.map(products => {
            return (
                <BaseCard
                 key={products._id} 
                image={products.image} 
                name={products.name}
                title={products.name}
                description={products.description}
                category={products.category}
                stock={products.stock}
                />
                
            )
        })}
      </div>
      
    </div>
  );
}
