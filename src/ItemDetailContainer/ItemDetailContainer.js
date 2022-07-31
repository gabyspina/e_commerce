import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {collection, query, getDocs, where, documentId} from 'firebase/firestore'
import {db} from '../FirebaseConfig/FirebaseConfig'
import CardDetail from '../Components/CardDetail/CardDetail'


const ItemDetailContainer = () => {
    
  const [productos, setProductos] = useState([]);


  const {id} = useParams();

  
  useEffect(() => {
    
      const getItems = async () => {
       
        const q = query(collection(db, 'food'), where(documentId(), '==',id));
        const docs = [];
        const querySnapshot = await getDocs(q);
  
        querySnapshot.forEach(doc => {
          docs.push({...doc.data(), id: doc.id});
        });
        setProductos(docs);
  
      };
      
      getItems();
  
    }, [id]);
  

    console.log('prod',productos)

  return (
    <div>
        {
            productos.map((product) =>{

              console.log('product',product)
                return(
                    <div key={product.id}>
                            <CardDetail item={product} />
                    
                    </div>
                )
            })
        }


    </div>
  )
}

export default ItemDetailContainer
