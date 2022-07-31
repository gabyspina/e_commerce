import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardProducts from '../CardProducts/CardProducts';
import { db } from '../../FirebaseConfig/FirebaseConfig';
import {collection, query, getDocs} from 'firebase/firestore'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



export default function Product() {
    const [items, setItems] = useState([]);


    useEffect(() => {
        const getItems = async () => {
          const q = query(collection(db, 'food'));
          const docs = [];
          const querySnapshot = await getDocs(q);
    
          querySnapshot.forEach(doc => {
            docs.push({...doc.data(), id: doc.id});
          });
          setItems(docs);
    
        };
        getItems();
    
      }, []);
    
      

    return (

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}
        padding={3}
      >
{ items.map((item) =>{
    return(

        <Grid item xs={12} sm={6} md={4} >  
            <Link to={`/detail/${item.id}`}>
            
                <CardProducts key={item.id} prod={item}  />
                
            </Link>
                
        </Grid >
        
)})}

      </Grid> 
    </Box>
  );
}
