import React,{Component} from 'react';

class Overview extends Component{

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
               <div className="cuisin">
                   <p>Bakery,Fast-food</p>
               </div>
               <div className="cost">
                    <p>&#8377;700 for two people(approx)</p>
               </div>
            </React.Fragment>
            
        );
    }
}

export default Overview;