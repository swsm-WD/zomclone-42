import React,{Component} from 'react';

const base_url = "https://restaurents-apis-app.herokuapp.com/restaurents/"



class CuisineFilter extends Component{

    constructor(props){

        super()

        this.state={

        }
    }
    cuisineFilter= (event)=>{
        var cf_url;
        var cuisine = event.target.value;
        var mealid = sessionStorage.getItem('mealid');
        if(cuisine === ''){
           cf_url = `${base_url}${mealid}`;
        }
        else{
            cf_url = `${base_url}${mealid}?cuisine=${cuisine}`
        }

        fetch(cf_url,{method:"GET"})
        .then(res=> res.json())
        .then((data)=>{
            this.props.cuisinedata(data)
        })
      }
    render(){

        return(
            <React.Fragment>
                <h4 className="text-left">Cuisines</h4>
                <div className="cuisine-select" onChange={this.cuisineFilter}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/>
                        &nbsp;All
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="1" name="cuisine"/>
                        &nbsp; North Indian
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="2" name="cuisine"/>
                        &nbsp; South Indian
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="3" name="cuisine"/>
                        &nbsp; Chinese
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="4" name="cuisine"/>
                        &nbsp; Fast Food
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="5" name="cuisine"/>
                        &nbsp; Streat Food
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="6" name="cuisine"/>
                        &nbsp; Mediterranean
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default CuisineFilter;