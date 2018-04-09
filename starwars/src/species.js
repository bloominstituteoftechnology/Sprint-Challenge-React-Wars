import React, { Component } from 'react';




class Species extends Component {
    constructor(props) {
        super()
        this.state = {

        }

    }
    render() {



        return (
            <div>
                <div>
                    {this.props.speciesProps}
                </div>
            </div>

        )

    }
}
export default Species;
