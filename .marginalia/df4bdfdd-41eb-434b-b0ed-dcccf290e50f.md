.Nav-Panel, .Notes-Panel {
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: space-between;
  padding: 10pt;

}

.Nav-panel {
  width: 15%;
  padding: 5pt;
  background-color: darkgrey;

  /* TURN OFF BEFORE BUILD */
  /* border-style: solid; */
  border-width: 2px;
  border-color: blue;
}

.Notes-panel {
  /* FFC */
  width: 100%;
  padding: 5pt;

  /* TURN OFF BEFORE BUILD */
  /* border-style: solid; */
  border-width: 2px;
  border-color: red;
  
  /* DD */
  display: "inline-block";
  /* background: lightgrey; */

}

.View-header {
  background-color: rgb(182, 90, 90);
  height: 50px;
  padding: 20px;
  color: white;
}

.Note-row {
  display: inline-flex;
  justify-content: flex-start;
	margin: 10px;

}

.Note-item {
  display: inline-block;
	margin: 10px;
	border: 1px solid #eee;
	box-shadow: 0 2px 2px #ccc;
	width: 150px;
  padding: 10px 20px 10px 20px;
  background: lightcyan;
  color: black;
}

.Note-header {
  background-color: rgb(14, 124, 158);
  height: 20pt;
  width: 175px;
  margin: 10px 10px 0px;
  padding: 0px 0px 0px 0px;
  font-family: sans-serif;
  font-size: 13pt;
  color: white;
  text-align: center;
}

.Note-body {
  background-color: rgba(81, 187, 236, 0.329);
  height: 150px;
  width: 175px;
  margin: 0px 10px 0px;
  padding: 0px;
  font-family: sans-serif;
  font-size: 11pt;
  color: black;
  text-align: center;
}

.Input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.Label {
  font-weight: bold;
  display:  block;
  margin-bottom: 8px;
}

.InputElement {
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
}

.InputElement:focus {
  outline: none;
  background-color: #ccc;
}

.btn-NavButton {
  display: flex;
  direction: row;
  justify-content: center;
  align-content: center;
  vertical-align: middle;
  align-items: center;
  
  padding: 2px;
  width: 140px;
  height: 35px;
  margin: 5px;

  line-height: 30px;
  
  box-shadow: 20%;


  background: rgb(14, 124, 158);
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14px;
}


