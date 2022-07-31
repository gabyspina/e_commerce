import {useState} from 'react';
import "./ItemCount.css";

import { Button } from '@mui/material';

const ItemCount = ({ stock, initial, onAdd}) => {


    const [count, setCount] = useState(initial);

    const handleCounterUp = () => {

        if (count < stock) {
            setCount(count + 1);
                return count;


        }else{
            alert("No se puede comprar mas de 5 unidades");
        }
    }

    const handleCounterDown = () => {

        if (count > initial) {
            setCount(count - 1);         
                return count;
            
    }   else{
            alert   ("No se puede comprar menos de 0 unidades");
    }
}

    console.log('count', count);

        return (
<div className="item-count">
    <div className='counter-section'>
        <div className='counter'>
            <div>
                <button onClick={handleCounterDown}>-</button>  
            </div>
            <div>
                <h3>{count}</h3>
                
            </div>

            <div>
                <button onClick={handleCounterUp}>+</button>
            </div>

        </div>

        <Button 
          variant="contained" 
          color="primary"
          onClick={() => onAdd(count)}
          >
            Add to Cart
          </Button>
        
    </div>
</div>
        )
    }


    export default ItemCount;

