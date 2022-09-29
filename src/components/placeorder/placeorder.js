import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import './placeorderDisplay.css';
const url = "https://restaurents-apis-app.herokuapp.com/restaurent/"
class PlaceOrder extends Component{

    constructor(){

        super()

        this.state={
        //    restaurent:'',
        //    data:'',
           firstname:'',
           lastname:'',
           phno:'',
           mail:'',
           date:'',
           persons:'',
           time:'',
           cuisine:[],
           mealtype:[]
        }
        this.handeldate = this.handeldate.bind(this);
        this.handelfname = this.handelfname.bind(this);
        this.handellname = this.handellname.bind(this);
        this.handelmail = this.handelmail.bind(this);
        this.handelpersons = this.handelpersons.bind(this);
        this.handeltime = this.handeltime.bind(this);
        this.handelphno = this.handelphno.bind(this);
        this.handleState = this.handleState.bind(this)
    }
    
    componentDidMount(){

        var rurl = `${url}${this.props.match.params.id}`;
        fetch(rurl, {method:"GET"})
        .then(res=>res.json())
        .then((data)=>{
            this.setState(
                {
                    name:data[0].name,
                    thumb:data[0].thumb,
                    city:data[0].city_name,
                    address:data[0].address,
                    review:data[0].reviews,
                    cuisine:data[0].Cuisine,
                    mealtype:data[0].type}
                )
        })
    }
    
    handeldate(event){
       this.setState({date:event.target.value})
    }
    handelfname(event){
        this.setState({firstname:event.target.value})
     }
     handellname(event){
        this.setState({lastname:event.target.value})
     }
     handelphno(event){
        this.setState({phno:event.target.value})
     }
     handelmail(event){
        this.setState({mail:event.target.value})
     }
     handelpersons(event){
        this.setState({persons:event.target.value})
     }
     handeltime(event){
        this.setState({time:event.target.value})
     }
     handleState(){
         var purl = "https://restaurents-apis-app.herokuapp.com/orders";
         var id = Math.floor(Math.random()*10000);
         var data = {
            _id : id,
            name : this.state.name,
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            email : this.state.mail,
            phno : this.state.phno,
            persons:this.state.persons,
            date:this.state.date,
            time:this.state.time
        }
         fetch(purl,{
             method:"POST",
             headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then(this.props.history.push('/myorders'));

     }
    render(){

        return(
            <React.Fragment>
                    <Header/>
                    <div className="order_banner">
                        <div className="order_banner-info">
                            <div className="order_banner-info-links">
                                <h1 id='order-heading' className="mb-5">ORDER NOW !</h1>
                                <Link to='/' id="home-link" className="my-5">Home </Link><span id="pyo">/ Place your order</span>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5 order-container">
                        <div className="row">
                            <div className="col-md-4">
                               <div className="card card-order-body">
                                   <img className="card-img-top" src={this.state.thumb} alt={this.state.name}/>
                                   <div className="card-body  p-0  text-left">
                                        <div className="quicksearch_header">
                                          <h1 className="card-title pt-2">{(this.state.name)}</h1>
                                        </div>
                                        <div className="mt-4">
                                             <p><i class="fa fa-map-marker mr-2 order-icon" aria-hidden="true"></i>{this.state.city}</p>
                                             <p><i class="fa fa-location-arrow mr-2 order-icon" aria-hidden="true"></i>{this.state.address}</p>
                                             <p><i class="fa fa-pencil-square mr-2 order-icon" aria-hidden="true"></i>{this.state.review}</p>
                                             <p><i class="fa fa-cutlery mr-2 order-icon" aria-hidden="true"></i>{this.state.cuisine.map(item =>(
                                                 <span key={item.cuisine}> {item.name} |</span>
                                             ))}</p>
                                             <p><i class="fa fa-coffee mr-2 order-icon" aria-hidden="true"></i>{this.state.mealtype.map(item =>(
                                                 <span key={item.mealtype}> {item.name} |</span>
                                             ))}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="quicksearch_header">
                                    <h1 className="card-title pt-2 text-right">Place Your Order</h1>
                                    <div className="row">
                                        <div className="col-md-12 my-2">
                                           <input type="text" name=""  className="form-control order-form" id="order-form-read"  value={(this.state.name)} readOnly/>
                                        </div>
                                        <div className="col-md-6 my-2">
                                           <input type="text" name=""  className="form-control order-form" onChange={this.handellname} value={(this.state.lastname)} placeholder="LAST NAME"/>
                                        </div>
                                        <div className="col-md-6 my-2">
                                           <input type="text" name=""  className="form-control order-form" onChange={this.handelfname} value={(this.state.firstname)} placeholder="FIRST NAME"/>
                                        </div>
                                        <div className="col-md-6 my-2">
                                           <input type="text" name=""  className="form-control order-form" onChange={this.handelphno} value={(this.state.phno)} placeholder="PHONE NUMBER"/>
                                        </div>
                                            <div className="col-md-6 my-2">
                                           <input type="text" name=""  className="form-control order-form" onChange={this.handelmail} value={(this.state.mail)} placeholder="EMAIL"/>
                                        </div>
                                        <div className="col-md-6 my-2">
                                           <input type="date" name=""  className="form-control order-form" onChange={this.handeldate} value={(this.state.date)} />
                                        </div>
                                        <div className="col-md-6 my-2">
                                          <select className="form-control order-form" onChange={this.handelpersons} value={(this.state.persons)} name="" >
                                            <option>NUMBER OF PERSONS</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="7">6</option>
                                            <option value="7">7</option>
                                          </select>
                                        </div>
                                        <div className="col-md-6 my-2">
                                           <input type="time" name=""  className="form-control order-form" onChange={this.handeltime} value={(this.state.time)} placeholder="SELECT TIME" />
                                        </div>
                                     </div> 
                                     <button className="btn btn-success m-2 btn-block" onClick={this.handleState}>Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
            </React.Fragment>

        )
    }
}

export default PlaceOrder;