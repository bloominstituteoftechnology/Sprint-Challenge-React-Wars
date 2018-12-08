import React from 'react';
import './StarWars.css';

class Films extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      film: []
    };
  }

  componentDidMount(){
    this.getFilm(this.props.film);
  }

  getFilm = URL =>{
    fetch(URL)
      .then(res => {
        console.log(res)
        return res.json();
      })
      .then(data => {
        console.log(data)
        this.setState({film: data});
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render(){
    console.log(this.state)
    return (
      <div className="Film_Title">
        <a className="Film_Link" href={this.props.film}><p> {this.state.film.title}</p></a>
      </div>
    )
  }
}

export default Films;
