import styled from 'styled-components';

const ContainerLeft = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 50%;
    height: 100vh;

    @media (max-width: 870px) {
        display: none;
    }
`;

export default ContainerLeft;
