import  React  from "react";
// import Film from "./film"

const Character = props => {
  return(
    <div className="Character container">
      <div className="row">
        <div className="nine columns">
          <h3>{props.character.name}</h3>
          <p>Birth Year: {props.character.birth_year}</p>
          <p>Gender: {props.character.gender}</p>
          <p>Hair Color: {props.character.hair_color}</p>
          <p>Height: {props.character.height}</p>
          <p>Mass: {props.character.mass}</p>
          <p>Skin Color: {props.character.skin_color}</p>
          <p>Eye Color: {props.character.birth_year}</p>
          <ul>
            {props.character.films.map(film => (
              <li film={film}>{`Films: ${film}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Character

/* 
birth_year:
"19BBY"
created:
"2014-12-09T13:50:51.644000Z"
edited:
"2014-12-20T21:17:56.891000Z"
eye_color:
"blue"
films:
Array[5]
gender:
"male"
hair_color:
"blond"
height:
"172"
homeworld:
"https://swapi.co/api/planets/1/"
mass:
"77"
name:
"Luke Skywalker"
skin_color:
"fair"
species:
Array[1]
starships:
Array[2]
url:
"https://swapi.co/api/people/1/"
vehicles:
Array[2]
function Todo(props) {
  return(
    <div
      className={`Todo-Item${props.todo.completed ? " completed" : ""}`}
      onClick={() => props.toggleTodo(props.todo.id)}
      >
      <p>{props.todo.task}</p>
    </div>

  )
}


*/