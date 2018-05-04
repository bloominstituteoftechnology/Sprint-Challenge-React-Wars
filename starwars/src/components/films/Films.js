import React, { Component } from 'react';

class Films extends Component{
    render(){
        return(
            <div>
                {this.props.film}
            </div>
        );
    }
}

export default Films;