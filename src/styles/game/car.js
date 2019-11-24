import styled from 'styled-components';

const Car = styled.img`
    position: absolute;
    z-index: 1;
    width: 20%;
    max-width: ${props => (props.turbo ? '100px' : '120px')};
    max-height: ${props => (props.turbo ? '100px' : '120px')};
    height: 20%;
    bottom: 0;
    margin-left: ${props => props.position && '-17px'};
    margin-bottom: ${props => (props.turbo ? '80px' : '0')};
    transition: 0.5s;
`;

export default Car;
