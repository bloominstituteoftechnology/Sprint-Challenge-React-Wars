import React, {Component} from 'react';
import styled  from 'styled-components';
import Cards  from './components/CardsComp';
import './App.css';

const AppContainer = styled.div`
    font-size: 14px;
    text-align: center;
    color: #E2E2E2;
    border-spacing: 0;
    background-color:#F5F5F5;
    height:100%;
    letter-spacing: 1px;
    padding-bottom:25px;
    background-image: url("https://wallpapercave.com/wp/xX2GRj6.gif");
    background-size: cover;

  }`;

const Header = styled.div`
    background-color: #243641;
    height: auto;
    padding: 15px 0px 10px 0px;
    color: white;
    font-size:18px;
`;


class App extends Component {
    constructor() {
        super();
        this.state = {
            starwarsChars: []
        };
    }

    componentDidMount() {
        // feel free to research what this code is doing.
        // At a high level we are calling an API to fetch some starwars data from the open web.
        // We then take that data and resolve it our state.
        fetch('https://swapi.co/api/people')
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({starwarsChars: data.results});
            })
            .catch(err => {
                throw new Error(err);
            });

    }

    render() {
        return (
            <AppContainer>
                <Header>
                    <img src={"https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_horiz-04368052e188.png"} alt="chart" />
                </Header>


                <Cards cards={this.state} key="myId"></Cards>

            </AppContainer>
        );
    }
}

export default App;
