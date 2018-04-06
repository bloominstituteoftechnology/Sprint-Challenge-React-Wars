import React, {Component} from 'react';


class MainObject extends Component{


    render(){
console.log(this.props)
return(<React.Fragment>
    {this.props.starwarsChars.map((sw, index)=>(
        <div key={sw, index} class="container">
        <div class="name-style">{sw.name}</div> 
      
     
        <div class="birthInfo-style">
        <div>Gender: {sw.gender} </div>
     <div>Birth: {sw.birth_year} </div>
</div>
          <div class="size-styles">
        <div>Height: {sw.height} </div> 
        <div>Mass: {sw.mass} </div>
        </div>
        <div class="colors-style">
        <div>Hair Color: {sw.hair_color} </div> 
        <div>Eye Color: {sw.eye_color} </div>
        <div>Skin Color: {sw.skin_color} </div>
        </div>
     
        <img class="logo" src="https://wallpapercave.com/wp/2s5s6mN.jpg" alt="star wars" />

         </div>
        




    ))}
    







</React.Fragment>)



    }
}
export default MainObject