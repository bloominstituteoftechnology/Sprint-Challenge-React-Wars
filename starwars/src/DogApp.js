import React from 'react'
import './DogApp.css'
import DogCard from './components/DogCard';

class DogApp extends React.Component {
    constructor(){
        super();
        this.state = {
            breedList: [],
            breedImages: []
        }
    }

    componentDidMount() {
        this.getBreedList('https://dog.ceo/api/breeds/list/all');
      }

    getBreedList = async (URL) => {
        await fetch(URL)
            .then(res => {
                return res.json();
            })
            .then(data => {
                const breedList = []
                for (const breed in data.message){
                    breedList.push(breed)
                }
                this.setState({breedList: breedList})
            })
            .catch(err => {
                throw new Error(err);
            })

        this.getBreadImages();    
    }

    getBreadImages = () => {
        this.state.breedList.map(breed => {
            fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                const breedImages = this.state.breedImages.slice()
                breedImages.push({
                    name: breed,
                    imageUrl: data.message
                })
                this.setState({breedImages: breedImages})
            })
            .catch(err => {
                throw new Error(err);
            })
        })
    }

    render(){
        const data = this.state.breedImages.map(breed => <DogCard data={breed}/>)
        return (
            <div className="App">
                <div className="Header"> </div>
                <div className="data">
                    {data}
                </div>
            </div>
        )
    }
}

export default DogApp