import styled from 'styled-components';

const Car = styled.img`
    width: 100%;
    max-width: ${props => (props.turbo ? '100px' : '120px')};
    max-height: ${props => (props.turbo ? '100px' : '120px')};
    height: 100%;
    bottom: 0;
    margin-left: ${props => props.position && '-17px'};
    transition: 0.5s;
`;

export default Car;
