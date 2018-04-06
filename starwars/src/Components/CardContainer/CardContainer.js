import React from "react";
const CardContainer = (props) => {

    console.log(props.data);
    return(
        <div>
        {props.data.map(post => {
            return(
                <div className="post">
                    <div>{post.name}</div>
                    <div>Height: {post.height}</div>
                    <div>Mass: {post.mass}</div>
                    <div>Birth year: {post.birth_year}</div>
                    <div>Gender: {post.gender}</div>
                    <div>Hair Color: {post.hair_color}</div>
                    <div>Eye color: {post.eye_color}</div>
                    <div>Skin Color: {post.skin_color}</div>
                </div>
            )
        })}
        </div>
    )
}

export default CardContainer;