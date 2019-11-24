import styled from 'styled-components';

const Turn = styled.p`
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 3;
    top: 5px;
    left: 25%;
    font-family: 'Press Start 2P', cursive;
    font-size: 15px;

    small {
        font-size: 15px;
    }

    @media (max-width: 870px) {
        left: 0;
    }
`;

export default Turn;
