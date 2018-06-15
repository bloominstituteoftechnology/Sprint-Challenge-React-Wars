import styled from 'styled-components';

const Container = styled.div`
	margin: 0 auto;
	text-align: ${props=>props.app ? 'center' : 'null'};
`

export default Container;