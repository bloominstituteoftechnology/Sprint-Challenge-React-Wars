import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumbo = (props) => {
    return (
      <div>
        <Jumbotron>

          <h1 className="display-3">React Wars</h1>
          <p className="lead">Below is a list of Star Wars characters!</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </div>
    );
  };
  
  export default Jumbo;