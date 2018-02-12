import React, { Component } from 'react';
import GridItem from './Card/Card';
import dummyData from '../../dummy-data';
import './Grid.css';
class Grid extends Component {

  filteredUsers = dummyData.filter(user => {
    const name = user.first_name + ' ' + user.last_name;
    console.log(this.props.gridSearchData);
    return name.includes(this.gridSearchData);
  });

  render() {
    return (
      <div className="user-grid d-flex flex-wrap col-md-12 panel">
        <div className="col-md-12 user-grid__header">
        </div>
        {this.filteredUsers.map(user => {
          return <Card key={user.id} user={user} />;
        })}
      </div>
    );
  }
}

export default UserGrid;
