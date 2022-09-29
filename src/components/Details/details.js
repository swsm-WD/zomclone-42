import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Header from '../Header/header';
import './details.css';


class Details extends Component{

    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <React.Fragment>
                <Header/>
                <img src="/images/shutterstock_1154073754.jpg" alt="item" id="item_image"></img>
                <div className="item_description">
                    <h1 className="item_name">The Big Chill Cakery</h1>
                    <nav className="nav item_info_links">
                        <Link className="nav-link details_link" id="overview_link" to="#">Overview</Link>
                        <Link className="nav-link details_link" id="contact_link" to="#">Contact</Link>
                    </nav>
                    <div id="contact_info">
                        <p><b>Phone Number</b></p>
                        <p id="phn">+91 6735677255</p>
                        <h5><b>The big Chill Cakery</b></h5>
                        <p>Shop 1, Plot D, Samruddhi Complex, Chincholi, 
                           Mumbai-400002, Maharashtra</p>
                    </div>
                </div>
                
           </React.Fragment>
           
        )
    }
}


export default Details