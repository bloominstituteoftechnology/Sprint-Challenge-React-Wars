import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid rgb(210, 210, 210);
  width: 100%;
  
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: ${props => props.count || 8}px;
  margin: 15px auto;
  padding: 16px 8px 50px 16px;
  background-color: white;
  background: rgb(60, 62, 68);
`
export default Container