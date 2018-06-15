import styled from 'styled-components';

const Container = styled.div`
	width: 800px;
	margin: 0 auto;
	text-align: ${props=>props.app}
`

export default Container;