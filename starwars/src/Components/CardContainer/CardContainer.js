import React from "react";
import PropTypes from 'prop-types';
const CardContainer = (props) => {

    return(
        <div className = "post__Container">
        {props.data.map((post, index) => {
            return(
                <div key={index} className="post">
                    <h2 key={post.name}>{post.name}</h2>
                    <div key={post.height}>Height: {post.height}</div>
                    <div key={post.mass}>Mass: {post.mass}</div>
                    <div key={post.birth_year}>Birth year: {post.birth_year}</div>
                    <div key={post.gender}>Gender: {post.gender}</div>
                    <div key={post.hair}>Hair Color: {post.hair_color}</div>
                    <div key={post.eye_color}>Eye color: {post.eye_color}</div>
                    <div key={post.skin_color}>Skin Color: {post.skin_color}</div>
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