import React ,{Component} from 'react';
import RestaurentDisplay from './details_with_rt';

const url = "https://restaurents-apis-app.herokuapp.com/restaurent/";

class RestaurentDisplayApi extends Component{


    constructor(props){

        super()

        this.state = {

            restaurent:''
        }
    }

    componentDidMount(){
        console.log();
        var r_url = `${url}${this.props.match.params.id}`;

        fetch(r_url,{method:"GET"})
        .then(res => res.json())
        .then((data)=>{
            this.setState({restaurent:data});
        })
    }

    render(){

        return(

            <RestaurentDisplay Restaurentdata={this.state.restaurent}></RestaurentDisplay>
        )
    }
}

export default RestaurentDisplayApi;