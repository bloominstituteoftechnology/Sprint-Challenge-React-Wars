import React from 'react';
import './DataTitles.css'



function DataTitles(props) {
  const titles = props.titles;
  return (
    <div className="Titles">
      <div className="Chars-Headers">Name:</div>
      <div className="Chars-Headers">Height:</div>
      <div className="Chars-Headers">Weight:</div>
      <div className="Chars-Headers">BirthYear:</div>
      <div className="Chars-Headers">Gender:</div>
    </div>
)}

export default DataTitles;