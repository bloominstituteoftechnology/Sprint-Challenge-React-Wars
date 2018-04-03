import React, {Component} from 'react';
import { Button, Tooltip } from 'reactstrap';


import './Name.css';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
            this.state = {
                tooltipOpen: false,
            };
        }  
        
    toggle() {
        this.setState({
          tooltipOpen: !this.state.tooltipOpen
        });
      }

    render() {
        {console.log("props", this.props)}
    return(
        <div>
            {this.props.props.map((name) => {
                return (
                <div key={name.name} className="nameButton"><Button color="warning"><a href="#" id={name.name}>{name.name}</a></Button>{' '}
                </div>
                )
            })}
                <div>
                    <Tooltip placement="right" isOpen={this.state.tooltipOpen} target={this.props.name} toggle={this.toggle}>
                    Hello world!
                    </Tooltip> 
                </div>
            render
        </div> 
    )
}

}

export default Profile