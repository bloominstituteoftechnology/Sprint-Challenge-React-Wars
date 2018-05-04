import React from 'react';

const Pic = ({img}) => {
    return (
        <div>
            <figure className="figure">
                {/* <img src="http://www.lepoint.fr/images/2015/01/30/star-wars-universe-3075506-jpg_2691048_660x281.JPG" className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."></img> */}
                {/* <img src="https://source.unsplash.com/1600x900/?space,planet" className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."></img> */}
                <img src={img} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."></img>
            </figure>   
        </div>
    );
};

export default Pic;