import React, {Component} from 'react';
import "./index.css";

class Profiles extends Component {
        constructor () {
            super();
            this.state = {}
        }
        render() {
            //console.log("inside card props.whatever =", this.props.whatever);
            // let propertiesArray = Object.entries(this.props.whatever);
            // let entryValues = propertiesArray.map((item, i)=>{
            //     if (i < 7) {
            //         return (
            //             <div className='card-each'>
            //                 <h3>{item[0]}: {item[1]}</h3>
            //             </div>
            //         );
            //     }                
            // })

            //console.log('inside card this =', this.props.text)
            return (
                <div className='card'>
                    <div className='cardWrapper'>
                        <div className='cardRow'>
                            <h2 className='alignRight'>Name:</h2> <h2 className='alignLeft'>{this.props.whatever.name}</h2>
                        </div>
                        <div className='cardRow'>
                        <h2 className='alignRight'>Birth year:</h2> <h2 className='alignLeft'>{this.props.whatever.birth_year}</h2>
                        </div>
                        <div className='cardRow'>
                        <h2 className='alignRight'>Eye color:</h2> <h2 className='alignLeft'>{this.props.whatever.eye_color}</h2>
                        </div>
                        <div className='cardRow'>
                        <h2 className='alignRight'>Gender:</h2> <h2 className='alignLeft'>{this.props.whatever.gender}</h2>
                        </div>
                        <div className='cardRow'>
                        <h2 className='alignRight'>Hair Color:</h2> <h2 className='alignLeft'>{this.props.whatever.hair_color}</h2>
                        </div>
                        <div className='cardRow'>
                        <h2 className='alignRight'>Height:</h2> <h2 className='alignLeft'>{this.props.whatever.height}</h2>
                        </div>
                        <div className='cardRow'>
                        <h2 className='alignRight'>Mass:</h2> <h2 className='alignLeft'>{this.props.whatever.mass}</h2>
                        </div>
                        <div className='cardRow'>
                        <h2 className='alignRight'>Skin Color:</h2> <h2 className='alignLeft'>{this.props.whatever.skin_color}</h2>
                        </div>
                    </div>
                </div>
            )
        }
};

export default Profiles;