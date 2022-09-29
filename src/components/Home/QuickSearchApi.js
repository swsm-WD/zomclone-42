import React,{Component} from 'react';
import QuickSearch from './QuickSearchApi';

const Mealurl = "https://restaurents-apis-app.herokuapp.com/mealtypes";


class QuickSearchAPI extends Component{

    constructor(){

        super()
        this.state={

            mealType:''
        }
    }

    componentDidMount(){

        fetch(Mealurl,{method:'GET'})
        .then(res=> res.json())
        .then((data)=>{
            this.setState({mealType:data});
        })
    }

    render(){
        return(
            <QuickSearch mealdata={this.state.mealType}></QuickSearch>
        )
    }
}

export default QuickSearchAPI;