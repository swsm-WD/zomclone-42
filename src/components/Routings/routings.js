import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from '../Home/home.js';
import MealtypeRestaurents from '../MealType_Restaurents/listing_api'
import RestaurentDetails from '../Details/using-react-tabs/details_with_rt_Api';
import PlaceOrders from '../placeorder/placeorder';
import ScrollToTop from '../ScrollToTop/scrolltotop'
import MyOrders from '../myBookings/mybookings';


const Router = ()=>{
    return(

        <BrowserRouter>
        <ScrollToTop/>
           <Route exact path = '/' component={Home}></Route>
           <Route path = '/list/:id' component ={MealtypeRestaurents}></Route>
           <Route path='/details/:id' component={RestaurentDetails}></Route>
           <Route path='/placeorder/:id' component={PlaceOrders}></Route>
           <Route path = '/myorders' component={MyOrders}></Route>
        </BrowserRouter>
    )
}

export default Router;