import React from 'react';
import styled from 'styled-components';

const TheForce = styled.div `
    border: 2px dashed black;
    color: white;
    box-sizing: content-box;
    text-align: center;
    padding: 20px;
    width: 50%;
    margin: 0 auto;

    ${props =>  (props.type === 'theForce') ? `
    border-color: #ff073a;
    box-shadow: 7px 7px 10px 0px rgba(255, 7, 58, 1);
    text-shadow: #26f7fd 4px 4px 3px;
    `
    : null}
`;

export default TheForce;

// // glow red shadow
// div {
//     box-shadow: 7px 7px 10px 0px rgba(255, 7, 58, 1);
//     text-shadow: #ff073a 4px 4px 3px;
//   }

// // glow light blue shadow
// div {
//     box-shadow: 7px 7px 10px 0px rgba(38, 247, 253, 1);
//     text-shadow: #26f7fd 4px 4px 3px;
//   }
  