import React from "react";
import PropTypes from 'prop-types';
const CardContainer = (props) => {

    return(
        <div className = "post__Container">
        {props.data.map(post => {
            return(
                <div className="post">
                    <h2>{post.name}</h2>
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

CardContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        mass: PropTypes.string.isRequired,
        birth_year: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        hair_color: PropTypes.string.isRequired,
        eye_color: PropTypes.string.isRequired,
        skin_color: PropTypes.string.isRequired
    }))
};
export default CardContainer;