import styled from 'styled-components';

const Car = styled.img`
    position: absolute;
    z-index: 1;
    width: 20%;
    max-width: 120px;
    max-height: 120px;
    height: 20%;
    bottom: 0;
    margin-left: ${props => props.position && '-17px'};
`;

export default Car;
