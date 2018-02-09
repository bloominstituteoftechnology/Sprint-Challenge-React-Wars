import styled from 'styled-components';

const CardBlockStyle = styled.div`
  display: inline-block;
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 500px;
  background-color: #ffffff;
  border: 1px solid #cdcfd2;

  img {
    width: 300px;
    margin: 10px auto 0;
  }

  p {
    font-size: 11px;
    margin: 10px 5px 0 5px;
    text-align: center;
    color: #989898
  }

  button {
    width: 90px;
    margin: 10px auto 0;
    padding: 3px 0 5px;
    border: 1px solid #5299cb;
    border-radius: 3px;
    color: #5299cb;
    font-weight: 700;
    font-size: 13px;
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: #c2dfff;
      border: 2px solid #5299cb;      
    }
  }
`;

export default CardBlockStyle;
