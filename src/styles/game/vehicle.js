import styled from 'styled-components';

const Vehicle = styled.div`
    transition: 0.5s;
    width: 120px;
    height: 120px;
    position: absolute;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${props => (props.turbo ? '80px' : '0')};
`;

export default Vehicle;
