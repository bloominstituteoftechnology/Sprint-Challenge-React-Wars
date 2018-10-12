import React from 'react';

const Film = film => {
  const url = film;
  console.log(url)
  return (
    <p>This movie: {film}</p>
  )
}

export default Film;