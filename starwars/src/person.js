+import React, { Component } from 'react';
+import './Person.css';
+import Homeworld from '../Homeworld/Homeworld';
+import Species from '../Species/Species';
+
+class Person extends Component {
+  constructor() {
+    super();
+    this.state = {
+      person: [],
+    };
+  }
+
+  componentDidMount() {
+    this.setState({ person: this.props.person, homeworld: this.props.person.homeworld, species: this.props.person.species[0] });
+  }
+
+  render() {
+    return (
+      <div className="Person">
+        <div>Name: {this.state.person.name}</div>
+        <div>Birth Of Year: {this.state.person.birth_year}</div>
+        <div>Eye Color: {this.state.person.eye_color}</div>
+        <div>Gender: {this.state.person.gender}</div>
+        <div>Hair Color: {this.state.person.hair_color}</div>
+        <div>Height: {this.state.person.height}</div>
+        <Homeworld home={this.props.person.homeworld}/>
+        <div>Mass: {this.state.person.mass}</div>
+        <div>Skin Color: {this.state.person.skin_color}</div>
+        <Species race={this.props.person.species}/>
+      </div>
+    );
+  }
+}
+
+export default Person