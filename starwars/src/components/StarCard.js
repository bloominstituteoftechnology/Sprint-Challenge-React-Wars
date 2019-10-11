import React from 'react';
import {Collapse, Button} from 'reactstrap';

export class StarCard extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false };
      this.name = props.name;
      this.key = props.key;
    }
  
    toggle() {
      this.setState(state => ({ collapse: !state.collapse }));
    }
  
    render() {
      return (
        <div key = {this.key}>
          <Button color="danger" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
          <Collapse isOpen={this.state.collapse}>
            <div>
                <p>
                    {this.name}
                </p>
            </div>
          </Collapse>
        </div>
      );
    }
  }
  
