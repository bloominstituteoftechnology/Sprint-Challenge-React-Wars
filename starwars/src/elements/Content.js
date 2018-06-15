import styled from 'styled-components';

const Content = styled.div`
	margin: 20px 0;
	font-size: ${props=>props.display? `30px`: `16px` };
	color: ${props=> props.display ? 'white': 'grey'};
	text-shadow: ${props => props.display ? '1px 1px 5px #000': '1px 1px 5px #fff'};
	display: flex;
	flex-direction: column;
`

export default Content;