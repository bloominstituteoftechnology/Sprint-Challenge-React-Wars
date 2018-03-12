import React, {Component} from 'react';

class CharCard extends Component {

    
    render() {
        return(
            this.props.data.map(data => {
                return(
                    <div className={'container-fluid charCard mt-3 mb-5'}>
                        <div className={'row'}>
                            <div className={'col-12 d-flex justify-content-around'}>
                                <h2 className={'charHead'}>{data.name}</h2>
                            </div>
                            <div className={'col-4'}>
                                <p>Birth Year: {data.birth_year}</p>
                            </div>
                            <div className={'col-4'}>
                                <p>Eye Color: {data.eye_color}</p>
                            </div>
                            <div className={'col-4'}>
                                <p>Hair Color: {data.hair_color}</p>
                            </div>
                        </div>
                        <div className={'col d-flex flex-md-row flex-wrap'}>
                            <div className={'col-12 col-md-6 d-flex flex-column justify-content-center'}>
                                <h4>Here's a list of links to films I am in!!!</h4>
                                    <ul>
                                        {data.films.map(item => {
                                            return(
                                                <li><a href={item} alt='link to film'>{item}</a></li>
                                            );
                                        })}
                                    </ul>
                            </div>
                            <div className={'col-12 col-md-6 d-flex flex-column justify-content-center'}>
                                <h4>Check out my vehicles!</h4>
                                    <ul>
                                        {data.vehicles.map(item => {
                                            return(
                                                <li><a href={item}>{item}</a></li>
                                            );
                                        })}
                                    </ul>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
}

export default CharCard;
