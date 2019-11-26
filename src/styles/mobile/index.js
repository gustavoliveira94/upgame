import styled from 'styled-components';

const Mobile = styled.div`
    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 150px;
        bottom: 0;
        right: 0;
        background-color: #00b4f7;
    }
    @media (min-width: 601px) {
        display: none;
    }
`;

export default Mobile;
