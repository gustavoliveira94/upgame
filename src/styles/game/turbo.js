import styled from 'styled-components';

const Turbo = styled.img`
    transition: 0.5s;
    visibility: ${props => (props.turbo ? 'visible' : 'hidden')};
    z-index: 2;
    position: absolute;
    bottom: -8px;
    width: 110px;
    margin-left: ${props => (props.position ? '-5px' : '-2px')};
`;

export default Turbo;
