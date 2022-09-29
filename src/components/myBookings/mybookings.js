import React , {Component} from 'react';
import Header from '../Header/header';
import MyBookingsDisplay from './mybookingsDisplay';
import './mybookings.css'

const url = 'https://restaurents-apis-app.herokuapp.com/orders'
class MyOrders extends Component{


    constructor(){

        super()
        this.state={
             mybookings:''
        }
    }
    componentDidMount(){
        fetch(url,{method:"GET"})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({mybookings:data})
        })
    }

    render(){
         
        return(
            <React.Fragment>
                <Header/>
               <h1 className="text-center mybookings-header">ORDERS SUMMARY</h1>
               <MyBookingsDisplay data={this.state.mybookings}/>
            </React.Fragment>
        )
    }
}

export default MyOrders;