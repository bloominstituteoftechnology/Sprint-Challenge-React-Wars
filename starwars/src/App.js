import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';
import PageButtons from './components/PageButtons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: '',
      prevPage: '',
      pageCount: 0,
      indexShow: 0,
      pageNum: 1,
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ 
          starwarsChars: data.results, 
          nextPage: data.next, 
          prevPage: data.previous, 
          count: data.count,
          pageCount: Math.round(data.count / 10),
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // leftPage = () => {
  //   this.setState(prevState => {
  //     let { indexShow } = prevState;
  //     indexShow = (indexShow - 1 < 0) ? prevState.starwarsChars.length - 1 : indexShow - 1;
  //     return {indexShow};
  //   })
  // }

  // rightPage = () => {
  //   this.setState(prevState => {
  //     let { indexShow } = prevState;
  //     indexShow = (indexShow + 1 >= prevState.starwarsChars.length) ? 0 : indexShow + 1;
  //     return {indexShow};
  //   })
  // }
  // 
  // renderList = () => {
  //   if (this.state.starwarsChars.length > 0) {
  //     return (
  //       <div className="list-container">
  //         <button onClick={this.leftPage}>{'<'}</button>
  //         {
  //           this.state.starwarsChars.map((item, i) => {
  //             if (this.state.indexShow === i) return <Person info={item} key={i} show={true}/>
  //             return <Person info={item} key={i}/>
  //           })
  //         }
  //         <button onClick={this.rightPage}>{'>'}</button>
  //       </div>
  //     );
  //   }
  // }
  
  previousPage = () => {
    const { prevPage, pageNum } = this.state;
    if (prevPage !== null) {
      this.getCharacters(prevPage);
      this.setState({pageNum: pageNum-1})
    }
  }

  nextPage = () => {
    const { nextPage, pageNum } = this.state;
    if (nextPage !== null) {
      this.getCharacters(nextPage);
      this.setState({pageNum: pageNum+1})
    }
  }

  specificPage = (pageNum) => {
    this.getCharacters(`https://swapi.co/api/people/?page=${pageNum}`)
    this.setState({pageNum});
  }

  onPageChange = (event) => {
    const { name } = event.target;
    window.scrollTo(0,0);
    name === '<' || name === '>'
      ? name === '<' ? this.previousPage() : this.nextPage()
        : this.specificPage(Number(event.target.name))
  }

  renderList = () => {
    if (this.state.starwarsChars.length > 0) {
      return (
        <div className="list-container">
          {
            this.state.starwarsChars.map((item, i) => <Person info={item} key={i} show={true}/>)
          }
          <PageButtons 
            pageCount={this.state.pageCount}
            onPageChange={this.onPageChange}
            pageNum={this.state.pageNum}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {this.renderList()}
      </div>
    );
  }
}

export default App;
