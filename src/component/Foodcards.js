import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import Datacards from './Datacards';
import CartList from './CartList';
import ProductDetails from './ProductDetails';
import FoodMenu from './FoodMenu';
const Foodcards = (props) => {
    const[cart,setCart] = useState([]);
    // const[view,setView] = useState([])
    console.log(cart);
    function AddToCart(data){
          
           setCart([...cart,{...data,quantity : 1}])
           }
     
   
  return (
    <>
          <div className='container'>
         
                <div className='row'>{
                   props.items.map((ele) => {
                        return (
                            <>
                                <div className='col-sm-3 mt-3'>
                                    <div className="card card_style">
                                        <img src={ele.imgdata} className='card-img-top' alt="" width="200" height="200" />
                                            <div className="card-body">
                                            <h5 className="card-title">{ele.rname}</h5>
                                            <p className="card-text">{ele.address}</p>
                                            <p className="card-text">Price:{ele.price}</p>
                                            <p className="card-text">Rating:{ele.rating}</p>
                                            <button className='btn btn-success ' onClick={(ele)=>AddToCart(ele)}>
                                           <Link To = {`/CartList/$(ele.id)`} cart={cart} className='text-white'>Add To Cart</Link>
                                            
                                           </button>&nbsp;
                                          <button className='btn btn-success '><Link To={`/productdetails/$(ele.id)`} className='text-white'>view details </Link></button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                } 

                </div>

            </div> 
        
 
  

        
       
           
    </>
  )
}

export default Foodcards;