import React from 'react';
import "./Profile.css";

const Profile = (props) => {

        let propNames = Object.getOwnPropertyNames(props.profile);
        let nonURL = Object.keys(props.profile).filter(item => item !== 'homeworld' )
                                               .filter(item => item !== 'species' )
                                               .filter(item => item !== 'films' )
                                               .filter(item => item !== 'vehicles' )
                                               .filter(item => item !== 'starships' )
                                               .filter(item => item !== 'url' );
        console.log(nonURL);
    return (

        <div>
        {nonURL.map(key => {
            
            return <p>{key}: {props.profile[key]}</p>
            
        })}   
        
        </div>

       

    )

}

export default Profile;

 /* props.profile.map(topic => {</div></div>
                if(typeof topic === 'object'){
                    return <p>{topic.name}</p>;
                    

                    }})
                }

            })
        } */