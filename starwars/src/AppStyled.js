import styled from 'styled-components';

const AppStyled = styled.div`
  font-family: Roboto, Helvetica, san-serif;
  .Header {
    padding: 160px 0;
  }
  .character {
    min-width: 1000px;
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .char{
      display: flex;
      max-width: 250px;
      flex-basis: 14%;
      border-radius: 5px;
      border: 3px solid #FBFA20;
      color: #FBFA20;
      .bio {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 160px;
        border: none;
      }
      h1 {
        writing-mode: vertical-rl;
        font-weight: bold;
        font-size: 18px
        min-width: 200px;
        border: none;
        text-align: center;
      }
    }
  }
`

export default AppStyled;