import React,{Component} from 'react';

const base_url = "https://restaurents-apis-app.herokuapp.com/restaurents/"


class CostFilter extends Component{

    constructor(){

        super()

        this.state={

        }
    }
    costFilter= (event)=>{
        var cf_url;
        var cost = (event.target.value).split(',');
        var lcost= cost[0];
        var hcost = cost[1];
        var mealid = sessionStorage.getItem('mealid');
        if(cost === ''){
           cf_url = `${base_url}${mealid}`;
        }
        else{
            cf_url = `${base_url}${mealid}?lcost=${lcost}&hcost=${hcost}`
        }

        fetch(cf_url,{method:"GET"})
        .then(res=> res.json())
        .then((data)=>{
            this.props.costdata(data)
        })
      }
    render(){

        return(
            <React.Fragment>
                <h4 className="text-left">Cost</h4>
                <div className="cuisine-select" onChange={this.costFilter}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/>
                        &nbsp;All
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="200,300" name="cuisine"/>
                        &nbsp; 	&#x20B9; 200- &#x20B9; 300
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="301,500" name="cuisine"/>
                        &nbsp; &#x20B9; 301- &#x20B9; 500
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="501,800" name="cuisine"/>
                        &nbsp; &#x20B9; 501- &#x20B9; 800
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="801,1000" name="cuisine"/>
                        &nbsp; &#x20B9; 801- &#x20B9; 1000
                    </label><br/>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default CostFilter;