import React, {Component} from 'react';
import styled  from 'styled-components';

const CardWrapper = styled.div`
    border-radius: 3px;
    border:1px solid grey;
    height:300px;
    margin-bottom:15px;
    
    
        .name {
            font-size:25px;
            border:1px solid white;
            position:relative;
            line-height:300px;
            padding:10px;
            border-radius: 3px;
        }
        .nameD {
            font-size:30px;
        }
        .info {
            padding-top:20px;
            font-size:18px;
        }
        
        /* entire container, keeps perspective */
        .flip-container {
            perspective: 1000px;
        }
        /* flip the pane when hovered */
        .flip-container:hover .flipper, .flip-container.hover .flipper {
            transform: rotateY(180deg);
        }
    
        .flip-container, .front, .back {
            width: 100%;
            height: 100%;
        }
        
        /* flip speed goes here */
        .flipper {
            transition: 0.4s;
            transform-style: preserve-3d;
            position: relative;
        }
        
        /* hide back of pane during swap */
        .front, .back {
            -webkit-backface-visibility: hidden;
            -moz-backface-visibility: hidden;
            -ms-backface-visibility: hidden;
            backface-visibility: hidden;

        
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            
            border-radius: 3px;
        }
        
        .front {
            -webkit-transform: rotateY(0deg);
            -ms-transform: rotateY(0deg);
            background-position: left top;
            z-index: 2;
        }
        
        .back {
            background-color: green;
            height:300px;
            -webkit-transform: rotateY(-180deg);
            -moz-transform: rotateY(-180deg);
            -o-transform: rotateY(-180deg);
            -ms-transform: rotateY(180deg);
            transform: rotateY(-180deg);
            
        }

`;

class Card extends Component {

    handleTouchStart = () => {
        console.log('handleTouchStart');
    }

    render() {
        return (
            <CardWrapper key={this.props.card.name} >
                <div className="flip-container" onTouchStart={this.handleTouchStart}>
                    <div className="flipper">
                        <div className="front">
                            <span className="name">{this.props.card.name}</span>
                        </div>
                        <div className="back">
                            <span className="nameD">{this.props.card.name}</span> <br/>
                            <span className="info">
                                <strong>Eye Color:</strong> {this.props.card.eye_color} <br/>
                                <strong>SkinColor:</strong> {this.props.card.skin_color} <br/>
                                <strong>Gender:</strong> {this.props.card.gender} <br/>
                            </span>
                        </div>
                    </div>
                </div>

            </CardWrapper>
        );
    }

}

export default Card;
