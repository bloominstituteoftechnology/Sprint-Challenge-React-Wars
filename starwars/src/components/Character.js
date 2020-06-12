// Write your Character component here
import React, {useState} from "react";

const Character = props => {
    const {data} = props
    console.log(props)
    
   const Card = ({info}) => {
       

   return (
       <div style={makeStyles().div}>
        <div style={makeStyles().div3} >
            <img
            alt="post thumbnail"
            className="post-image"
            src={info.image}
            />
                <div style={makeStyles().div2}>
                <h1 style={makeStyles().text} >{info.name}</h1>
                <h2 style={makeStyles().text}>Species: {info.species}</h2>
                <h2 style={makeStyles().text}>{info.type}</h2>
                <h2 style={makeStyles().text} > Status: {info.status}</h2>
                <h2 style={makeStyles().text}> 🪐  Location: {info.location.name}</h2>
                </div>
         </div>      
            
       </div>
       )
   }

   
    const makeStyles = () =>{
        return {
            div: {
                display: 'flex',
                justifyContent: 'center',
                padding: '2%',
               
            },
            text:{
                color: 'white',
            },


            div2:{
                padding: '0 2%',
            },

            div3: {
                display: 'flex',
                justifyContent: 'center',
                background: 'grey',
                width: '50%',
                height: '100%', 
                border: '2px solid black',

            }

        }
    }

    
    return (
      <div>
          {
              data.map(event =>{
                  return <Card key={event.id} info={event}  />
              })
          }


      </div>
    )


}

export default Character;