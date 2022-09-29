import React,{Component} from 'react';
import {withRouter} from 'react-router';
import './search.css';


const url = "http://localhost:4000/api/filter";
var rurl = "http://localhost:4000/api/get-location";
class Search extends Component{

    constructor(props){
        
        super()
        // console.log(props);
        this.state={
            locality:'',
            restaurents:''
        }
    }
   

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then(res=> res.json())
        .then((data)=>{
            this.setState({locality:data});
        })
    }


    renderLocality(data){
        if(data){
            return(
            data.map((data)=>{
                return(
                <option key={data._id} value={data._id}> {data.city_name}</option>
                )
            })
            )
        }
    }
    
    renderRestaurents =(data)=>{
        if(data){
            return(
                data.map((data)=>{
                    return(
                    <option key={data._id} value={data._id}>{data.name}</option>
                    )
                })
            )
        }
    }
    restaurents = (event)=>{
         var r_url = `${rurl}${event.target.value}`;
        fetch(r_url,{method:'GET'})
        .then(res=>res.json())
        .then((data)=>{
              this.setState({restaurents:data});
        })
    }
    
    restDetails = (event)=>{
        this.props.history.push(`/details/${event.target.value}`)
    }
    render(){
        return(
        <div className="banner_section">
            <div className="logo">
                <p className="icon">
                    $m
                </p>
            </div>
            <div className="header">
                <h3>Find best restaurent ,cafes and bars</h3>
            </div>
            <div className="search_section container-fluid">
                <div className="form-group row">
                    <div id="location_search" className="col-lg-6 col-md-6 col-sm-12 col-xsm-12">
                        <select  name="" id="location_search_select" onChange={this.restaurents}>
                            <option>Select your location</option>
                            {this.renderLocality(this.state.locality)}
                        </select>
                    </div>
                    <div id="restaurent_search" className="col-lg-6 col-md-6 col-sm-12 col-xsm-12">
                        <select  name="" id="restaurent_search_select" onChange={this.restDetails}>
                        <option>Select Restaurent</option>
                        {this.renderRestaurents(this.state.restaurents)}
                        </select>
                    </div>
                </div>
            </div>
        </div>
        
        )
    }
} 

export default withRouter(Search);