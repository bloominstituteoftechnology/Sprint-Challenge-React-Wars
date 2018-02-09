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
    width: 250px;
    margin: 10px auto;
  }

  p {
    margin: 5px 0 0;
    font-size: 14px;
    text-align: center;
  }
`;

export default CardBlockStyle;
