import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 220px;
    height: 100%;
    padding: 10px;

    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;

export default Container;
