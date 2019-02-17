import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            dogs: []
        };
    }

    componentDidMount() {
        this.getDogs('https://dog.ceo/dog-api/#all');
    }

    getDogs = URL => {
        fetch(URL)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                this.setState({ dogs: data.results });
            })
            .catch(err => {
                throw new Error(err);
            });
    }

    render() {
        return (
            <div>
                <h1>Doggies!</h1>
            </div>
        )
    }

}

export default App;