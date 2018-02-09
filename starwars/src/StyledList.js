import styled from 'styled-components';

const StyledList = styled.div`
    flex-flow:row wrap;
    border:3px solid maroon;
    width:100px;
    height : 150px;
   


    -webkit-box-shadow: 0 8px 8px -6px black;
       -moz-box-shadow: 0 8px 8px -6px black;
            box-shadow: 0 8px 8px -6px black;
    
    .char {
        margin:2%;
    }
    .title {
        font-size:1.3rem;
        color: brown;
    }
`
export default StyledList;