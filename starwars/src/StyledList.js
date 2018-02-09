import styled from 'styled-components';

const StyledList = styled.div`
    display:inline-block;
   
    border:1px dashed #db4e12;
    border-radius:10px;
    width:250px;
    color:#fff;
    background:rgba(0,0,0,.356);
    margin:2%;

    -webkit-box-shadow: 0 8px 8px -6px black;
       -moz-box-shadow: 0 8px 8px -6px black;
            box-shadow: 0 8px 8px -6px black;
    
    .char {
        margin:2%;
    }
    .title {
        font-size:2rem;
        border-bottom:1px solid #443e3e;
        color:#fff;
        font-weight:50%;
        border-radius:10px;
         border:3px solid #db4e12;
    }
`
export default StyledList;