import React,{Component} from 'react';

class Contact extends Component{

    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <React.Fragment>
               <div>
                  <h4>About this place</h4>
               </div> 
               <div className="phno">
                   <p>Phone Number</p>
                   <p>+91 4893938749</p>
               </div>
               <div className="address">
                    <p><b>The Big Chill Cakery</b></p>
                    <p>Shop 1, Plot D, Samruddhi Complex, Chincholi, Mumbai-400002, Maharashtra</p>
               </div>
            </React.Fragment>
            
        );
    }
}

export default Contact;