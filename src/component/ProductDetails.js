import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Datacards from './Datacards';


const ProductDetails = (props) =>{
    const {id} = useParams();
    const [details, setDetails] = useState([]);
   
    useEffect(() => {
        const getDetails =  props.items.map((ele) => {
          if (ele.id === id) {
            console.log(ele);
            return setDetails(ele);
          }
        });
      }, [id]);
    
     return(
        <>
             details:{details.title}
        </>
     )
     }
export default ProductDetails