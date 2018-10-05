import React from 'react';
import "./Profile.css";

const Profile = (props) => {

        let propNames = Object.getOwnPropertyNames(props.profile);
        let nonURL = Object.keys(props.profile).filter(item => item !== 'homeworld')
                                               .filter(item => item !== 'species' )
                                               .filter(item => item !== 'films' )
                                               .filter(item => item !== 'vehicles' )
                                               .filter(item => item !== 'starships' )
                                               .filter(item => item !== 'url' );
        let firstName = props.profile['name'].split('');
        firstName = firstName[0];
        
    return (
        <div className='prof-container'>
        <div className="avatar">{firstName}</div>
        <div className="info">
        {nonURL.map(key => {
            
            return (
                   <div key={key} className="info-section"> 
                        <p className="topic">{key}:</p> 
                        <div className="topic-info">
                            <p className="list-item">{props.profile[key]}</p>
                        </div>
                   </div>
        )}
        
        )}   
        
        
        </div>
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