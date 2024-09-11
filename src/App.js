
import './App.css';
import React from 'react';
 import Home from './component/Home';
 import Home1 from './component/home/Home1';
import AboutUs from './component/aboutus/AboutUs';
import ContactUs from './component/contact/ContactUs';
import NotFound from './component/notfound/NotFound';
 
import NavBar from './component/NavBar'

 
import { Route ,Routes } from 'react-router-dom';
import ProductDetails from './component/ProductDetails';

 import LatestFood from './component/LatestFood';
import FoodDelivery from './component/FoodDelivery';
import Order from './component/Order';
import SignUp from './component/SignUp';
import Foodcards from './component/Foodcards';
import CartList from './component/CartList';

// import FoodMenu from './component/FoodMenu';
import Carousel from './component/Carousel';

function App()  {
 

return (
    <div className="App">
    <NavBar/>
    {/* <FoodMenu/> */}
    <Carousel/>
    <CartList/>
   
    
    
       
        {/* <Ajaxcurd/> */}
        
       
      <Routes>
<Route exact path='/' element={<Home/>}/>
  <Route exact path='/home' element={<Home1/>}/>
  <Route exact path='/AboutUs' element={<AboutUs/>}/> 
  <Route exact path='/CartList' element ={<CartList/>}/> 
 <Route exact path='/contact' element={<ContactUs/>}/>
  <Route  path='/productdetails/:id'   element={<ProductDetails/>}/> 
  <Route exact path='/CartList/:id'  element={<CartList/>}/>
  <Route exact path='/Foodcards'   element={<Foodcards/>}/>
  <Route  path='*' element={<NotFound/>}/>
  
  <Route exact path='/latestfood'  element={<LatestFood/>}/>
  <Route exact path='/fooddelivery' element={<FoodDelivery/>}/>
  <Route exact path='/order' element={<Order/>}/>
  <Route exact path='/signup' element={<SignUp/>}/>
  
</Routes>  
 

</div>
  );
}



export default App;
