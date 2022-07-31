import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from "react";
import Alert from '@mui/material/Alert';

import {collection, addDoc} from '@firebase/firestore';
import {db} from '../../FirebaseConfig/FirebaseConfig';

const initialState = {
  name: '',
  lastName: '',
  city: '',
}

const Checkout = () => {
    
  const [values, setValues] = useState(initialState);
  
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const [purchaseID, setPurchaseID] = useState('');
  

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('valores',values);

    const docRef  = await addDoc(collection(db, 'pedido'),{
      name: values.name,
      lastName: values.lastName,
      city: values.city
    });

      console.log('El ID de la  transacción es:', docRef.id);
    setPurchaseID(docRef.id);
    setValues (initialState);
  }


    return (
   
   <div>
        <Stack className="cart-container" onSubmit={onSubmit}
        
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="on"
      alignItems="center"
   >
      <TextField
        id="outlined-name"
        label="Nombre"
        value={values.name}
        onChange={handleChange}
        name="name"
      />
      <TextField
        id="outlined-name"
        label="Apellido"
        value={values.lastName}
        onChange={handleChange}
        name="lastName"
      />
      
      <TextField
        id="outlined-mail"
        label="Ciudad"
        value={values.city}
        onChange={handleChange}
        name="city"
      />

        <Stack  
        direction="row"
        alignItems="center"
        spacing={12}
    >

            
        <Stack spacing={2} direction="column" >
          <Button variant="contained" type="submit" color='success' >Finalizar Compra</Button>
        </Stack>            
        
        </Stack>
      </Stack>

        {purchaseID && <Alert severity="success" size="md">El ID de la transacción es: {`${purchaseID}`}</Alert>}
    

    
    </div>
      

  )
}

export default Checkout
  
