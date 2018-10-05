import React from 'react';
import "./Profile.css";

const Profile = (props) => {

    return (

        <div>
        {console.log(props.profile[0])}    
        <p>{props.profile.birth_year}</p>
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