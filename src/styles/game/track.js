import styled from 'styled-components';

const Track = styled.div`
    display flex;
    justify-content: ${props =>
        // eslint-disable-next-line no-nested-ternary
        props.move === 's'
            ? 'center'
            : props.move === 'a'
            ? 'flex-start'
            : 'flex-end'};
    z-index: 2;
    width: 100%;
    min-width: 600px;
    height: 100vh;
    background-image: url(${require('../../assets/images/CENARIO_anima.gif')});
    background-repeat: no-repeat;
    background-position: center center;

    @media(max-width: 600px) {
        background-size: cover;
        min-width: 100%;
        height: calc(100% - 150px);
    }
`;

export default Track;
