import styled from 'styled-components';

const InitGame = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    width: 400px;
    height: 100px;
    background-color: #fff;
    background-image: url(${require('../../assets/images/CENARIO_anima.gif')});
    background-position: 250px center;
    border: 6px solid #cf0000;
    box-shadow: 10px 5px 10px hsla(0, 0%, 100%, 0.15);
`;

export default InitGame;
