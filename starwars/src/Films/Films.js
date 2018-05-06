import React, {Component} from 'react';
import './Films.css';



class Films extends Component {
    constructor() {
        super();
        this.state = {
            fetchResults: '',
        }       
    }

    componentDidMount() {     
            fetch(this.props.filmsData)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    this.setState({ fetchResults: data.title})
                })
                .catch(err => {
                    throw new Error(err);
                });
    }

    render() {
        return (
            <div>
                {this.state.fetchResults}
            </div>
        )
    }

}

export default Films;
