import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { db } from '../../FirebaseConfig/FirebaseConfig';
import { collection, query, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';



function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Galery() {

  const [items, setItems] = useState([]);


    useEffect(() => {
        const getItems = async () => {
          const q = query(collection(db, 'photos'));
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
    <ImageList
      sx={{ width: "80 %", height: 450, marginleft: "10%" }}
      variant="quilted"
      cols={4}
      rowHeight={300}
    >
      {items.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
