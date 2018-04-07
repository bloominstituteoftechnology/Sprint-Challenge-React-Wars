import React, {Component} from 'react';
class ObjectHandler extends Component{

render(){
 
console.log(this.props)
    return(
        
       
        <div class="img-div"><img class="mainImg-style" src={this.props.doggos.message}/></div>

    )

    }
}
export default ObjectHandler