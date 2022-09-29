import React from 'react';
import {Tabs,Tab,TabPanel,TabList} from 'react-tabs';
import {Link} from 'react-router-dom'
import Header from '../../Header/header';
import './details_with_rt.css';


const DetailsWithReactTabs = (props)=> {

   const Cuisines =({Restaurentdata})=>{

      if(Restaurentdata){
          return Restaurentdata[0].Cuisine.map((data)=>{
              return(
                  <span key={data.cuisine}> {data.name} |</span>
              )
          })
      }
   }

   const renderRestaurent = ({Restaurentdata})=>{
       if(Restaurentdata){
        return(
            <React.Fragment>
                <img src={Restaurentdata[0].thumb} alt="item" id="item_image"></img>
                <div className="item_description">
                    <h1 className="item_name">{Restaurentdata[0].name}</h1>
                    <Tabs >
                        <TabList id="links">
                            <Tab className="description_links">Overview</Tab>
                            <Tab className="description_links">Contact</Tab>
                        </TabList>
                        <TabPanel>
                            <div id="overview_info">
                                <h5 id="place">About this place</h5>
                                <p id="address_header">Address</p>
                                <p id="address">{Restaurentdata[0].address}</p>
                                <p id="item_type">Cuisine</p>
                                <p id="item_type_list">{Cuisines(props)}</p>
                                <p id="cost">Average Cost</p>
                                <p id="cost_details">&#x20B9;{Restaurentdata[0].cost} for two people(.approx)</p>
                                <Link to={`/list/${sessionStorage.getItem('mealid')}`} className="btn btn-danger">Back</Link> &nbsp;
                                <Link to = {`/placeorder/${Restaurentdata[0]._id}`} className="btn btn-success">Place Order</Link>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div id="contact_info">
                                <p><b>Phone Number</b></p>
                                <p id="phn">+91 6735677255</p>
                                <h5><b>{Restaurentdata[0].name}</b></h5>
                                <p>{Restaurentdata[0].address}</p>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </React.Fragment>
           )
       }
      
   }
        return(
            <React.Fragment>
                <Header/>
                {renderRestaurent(props)}
                
           </React.Fragment>
           
        )
}


export default DetailsWithReactTabs;