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
        // let arr = [];
            // // console.log(typeof filmData)
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
            
        
        // console.log(arr)
        // this.setState({ fetchResult: arr })
        
    }

    

    // loopFilms() {
    //     this.state.films.forEach(film => this.handleFetch(film))
    // }

    render() {
        return (
            <div>
                {this.state.fetchResults}
            </div>
        )
    }

}

export default Films;
