import React from "react";
import { List } from 'semantic-ui-react'

const Films = props => {
  return (
    <List bulleted horizontal>
    {props.films.map(i => <List.Item><a href={i}>Film</a></List.Item>)}
      </List>
  );
};

export default Films;
