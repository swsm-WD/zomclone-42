import React,{Component} from 'react';
import ListingDisplay from './listing_dsiplay';
import Footer from '../Footer/footer';
import CuisineFilter from '../Filters/cuisine/cuisinefilter';
import CostFilter from '../Filters/cost/costfilter';
import Header from '../Header/header';

const url = "https://restaurents-apis-app.herokuapp.com/restaurents?mealtype="
const base_meal_url = "https://restaurents-apis-app.herokuapp.com/mealtypes?type=";


var limit = 4
class ListingApi extends Component{


    constructor(props){

        super()

        this.state={

            restaurents:'',
            mealtype:'',
            activePage: 1,
            totalNoOfItems: 1,
        }
    }


    componentDidMount(){

        var rest_url = `${url}${this.props.match.params.id}`;
        var meal_url = `${base_meal_url}${this.props.match.params.id}`
        fetch(rest_url,{method:'GET'})
        .then(res=>res.json())
        .then((data)=>{
            this.setState({
                restaurents:data.slice(0,data.length-1),
                totalNoOfItems:data.length-1
            });
        });
        fetch(meal_url,{method:'GET'})
        .then(res=> res.json())
        .then((data)=>{
            this.setState({mealtype:data[0].name});
        })
        sessionStorage.setItem('mealid',`${this.props.match.params.id}`)
    }

    cuisineFilter(data){
        this.setState({restaurents:data});
    }
    render(){
        

        return(
            <React.Fragment>
                <Header/>
                <div className="container-fluid p-0">
                    <h1 className="text-center p-5 list_header">Here are your Favourite Listings<i className="fa fa-cutlery ml-2" aria-hidden="true"></i></h1>
                </div>
                <div className="container-fluid">
                    <div className="row p-2">
                        <div className="col-md-3 filters">
                            <h2 className="text-center list_header mt-4 mb-0">Filters Here</h2>
                            <div className="filters-container  pt-3 px-4">
                                <CuisineFilter cuisinedata={(data)=>{this.cuisineFilter(data)}}/>
                                <CostFilter costdata={(data)=>{this.setState({restaurents:data})}}/>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <ListingDisplay restaurents = {this.state.restaurents} mealtype={this.state.mealtype} activePage={this.state.activePage} limit={limit} totalNoOfItems={this.state.totalNoOfItems}
                        pageNumber={(data) => {this.setState({activePage:data})}}></ListingDisplay>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default ListingApi;