import styled from 'styled-components';

const CardBlockStyle = styled.div`
  display: inline-block;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  background-color: #c2c5ca;
  border: 2px solid #443e3e;
  color: #443e3e;      

  img {
    width: 300px;
    margin: 10px auto;
  }

  p {
    font-size: 14px;
    text-align: center;
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
