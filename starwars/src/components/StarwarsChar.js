import React from 'react';
import Display from './Display.js'

const StarwarsChar = (props) => {

console.log(props)
return(
  <div>

    {props.data.map((data,index) => <Display key = {index} data = {data} changeInfo = {props.changeInfo} className ={props.className} />)}
  </div>
)

}
export default StarwarsChar
