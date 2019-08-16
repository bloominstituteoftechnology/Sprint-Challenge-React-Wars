import React from "react";
import styled from "styled-components";

const PageButton = props => {
  const Button = styled.button`
    border: none;
    background: #000;
    color: #ffe81f;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin: 1rem;

    &:hover {
      background: #ffe81f;
      color: #000;
    }
  `;

  return (
    <>
      <Button
        onClick={() => {
          if (props.pageNumber <= 1) {
            props.setPageNumber(1);
          } else {
            props.setPageNumber(props.pageNumber - 1);
          }
        }}
      >
        Previous Page
      </Button>
      <Button
        onClick={() => {
          props.setPageNumber(props.pageNumber + 1);
        }}
      >
        Next Page
      </Button>
    </>
  );
};

export default PageButton;
