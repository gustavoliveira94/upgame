import styled from 'styled-components';

const Turn = styled.p`
    position: absolute;
    display: flex;
    align-items: center;
    align-self: flex-start;
    font-family: 'Press Start 2P', cursive;
    font-size: 15px;
    margin-top: 5px;

    small {
        font-size: 15px;
    }

    @media (max-width: 870px) {
        left: 0;
    }
`;

export default Turn;
