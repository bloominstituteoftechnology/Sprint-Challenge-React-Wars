import React from 'react';


class InfoItem extends React.Component {
    render() {
        keys = Object.keys(this.props.item);
        values = Object.values(this.props.item);
        return (
            <div>
            <p>something</p>
            console.log(keys);
            </div>
        )
    }
}


export default InfoItem;