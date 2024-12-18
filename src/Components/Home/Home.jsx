import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/actions";
//import Card from '@mui/material/Card';
import Card from '../Cards/Card'
import CardContent from '@mui/material/CardContent';

export default function Home() {
  const dispatch = useDispatch();
    const allProducts = useSelector((state)=>state.allProducts)
  const traerlos = () => {
    dispatch(getAllProducts());

  };
 
  return (
    <div>
      <h1>HOME</h1>
      <Button variant="contained" color="primary" onClick={traerlos}>
        FUNCIONA
      </Button>
      <div>
      { allProducts.map(products => {
            return (
                <Card>
                    {products.name}

                </Card>
                
            )
        })}
      </div>
      
    </div>
  );
}
