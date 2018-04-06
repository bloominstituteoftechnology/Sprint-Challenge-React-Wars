import React from 'react';
// import { Button } from 'reactstrap';
const tstyle = {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 80,
    fontFamily: 'ITC Serif Gothic '
}

class Title extends React.Component {
    render() {
        return (
            <div>
                <h1 style={tstyle}>Star Wars</h1>
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" /> */}
            </div>
        )
    }
};

export default Title;