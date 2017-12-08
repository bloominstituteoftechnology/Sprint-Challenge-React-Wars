import React,{Component} from 'react'
import './CardContainer.css'

class CardContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            charData:props.chardata
        }
        console.log(this.state)
    }

    render(){
        return (
            <div className='Cardcontainer'>
                <div className='Cardcontainer__header'>
                <b>{this.state.charData.name}</b>
                </div>
                <div className='Cardcontainer__body'>
                    <div className='Cardcontainer__bodyitem'>
                        <b>DOB : </b>{this.state.charData.birth_year}
                    </div>
                    <div className='Cardcontainer__bodyitem'>
                        <b>Gender : </b>{this.state.charData.gender}
                    </div>
                    <div className='Cardcontainer__bodyitem'>
                        <b>Height : </b>{this.state.charData.height}
                    </div>
                    <div className='Cardcontainer__bodyitem'>
                        <b>Eye Color : </b>{this.state.charData.eye_color}
                    </div>
                    <div className='Cardcontainer__bodyitem'>
                        <b>Skin Color : </b>{this.state.charData.skin_color}
                    </div>
                    <div>
                        
                    </div>
                </div>
                
            </div>

        )
    }
}

export default CardContainer;