import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import ReadMore from '../Readmore/readmore'
import './listing_display.css';

const renderRestaurents = (props,data)=>{
    var limit = props.limit;
    var page = props.activePage;
    data = data.slice((page - 1) * limit, (page - 1) * limit + limit);
       if(data){
           return data.map((data)=>{
             return(
                       <div className="col-md-6 my-3" key={data._id}>
                                <div className="card rest-card" id="restaurent_container">
                                    {/* <div className="show_more">
                                        <div className="info_link">
                                            <Link id="more_info" to ={`/details/${data._id}`}><i className="fa fa-link mr-2"></i>More info</Link>
                                        </div>
                                    </div> */}
                                    <img src={data.thumb} className="card-img-top rest-card-img img-fluid" alt=""/>
                                    <div className="card-body ">
                                        <h4 id="restaurent_name">{data.name}</h4>
                                        <p><b>Locality : </b>{data.locality}</p>
                                        <p>
                                            <ReadMore>
                                               {data.description}
                                            </ReadMore>
                                        </p>

                                    </div>
                                    <div className="card-footer">
                                        <p className="float-left location"><i className="fa fa-map-marker mr-2" aria-hidden="true"></i>{data.city_name}</p>
                                        <Link className="float-right ml-5" to ={`/details/${data._id}`}>More info</Link>
                                    </div>
                                </div>
                       </div>
             )
              
           })
       }
       else{
          
        return (
             <h1> Sorry no restaurents found</h1>
        )

       }
  }

const handlePageChange = (props,pagenumber)=>{
    props.pageNumber(pagenumber);
    var data = props.restaurents;
    renderRestaurents(props,data);
}
const ListingDisplay = (props)=>{


  const renderMealtype = ({mealtype})=>{
      if(mealtype){
          return mealtype;
      }
  }
  
  
  

   return(

        <div className="container-fluid Listings_container p-0">
            <h2 className="text-center list_header p-2 my-4">Here Are your Restaurents for {renderMealtype(props)}</h2>
            <div className="row p-2">
                   {renderRestaurents(props,props.restaurents)}
                   <div className="col-md-12 mt-3 mb-1" >
                    <Pagination 
                      activePage={props.activePage}
                      itemsCountPerPage={props.limit}
                      totalItemsCount={props.totalNoOfItems}
                      pageRangeDisplayed={5}
                      onChange={(pagenumber)=> handlePageChange(props,pagenumber)}
                      itemClass="page-item"
                      linkClass="page-link"
                    />
                </div>
                
            </div>
            
        </div>
   )
}

export default ListingDisplay;