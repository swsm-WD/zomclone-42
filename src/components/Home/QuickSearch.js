import React from 'react';
import {Link} from 'react-router-dom'
import './quicksearch.css';



const QuickSearch = (props)=>{
    
    const renderList = ({mealdata})=>{
       if(mealdata){
           return mealdata.map((data)=>{
               return(
                    <div key={data.mealtype} className="col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                        <Link to={`/list/${data._id}`} className="item_link">
                            <div className="card qs_card mb-5">
                                <div className="row">
                                    <div className="col-md-6 item_image">
                                        <img src={`/images/${data.name}.png`} className="card-img" alt={data.name}/>
                                    </div>
                                    <div className="col-md-6 p-0">
                                    <div className="card-body qs_card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text"> Exclusive {data.name} options for your need.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>    
                        </Link>
                    </div> 
                )
               })

       }
    }
    

        
        return(
           <React.Fragment>
            <div className="quicksearch_section">
                <div className="quicksearch_header mb-5">
                    <h1>Quick Search</h1>
                    <p>Discover Restaurent by type of meal</p>
                </div>
                <div className="row container">
                    {renderList(props)}
                </div>
            </div>
            
    
           </React.Fragment>
        )
    }


export default QuickSearch;