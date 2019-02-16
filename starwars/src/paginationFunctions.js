export const getPreviousPage = (previousPage, getCharacters) => {
    if(previousPage === null) {
      getCharacters("https://swapi.co/api/people/?page=9")
    }
    if(previousPage !== null)
    getCharacters(previousPage)
  }



  export const   getNextPage = (nextPage, getCharacters) => {
    if(nextPage === null) {
      getCharacters("https://swapi.co/api/people/")
    }
    if(nextPage !== null)
    getCharacters(nextPage)
  }
