import styled, { css } from 'styled-components';

const initCenter = css`
    width: 15px;
    height: 15px;
    margin-left: -20px;
    position: absolute;
    margin-top: 0;
`;

const finalCenter = css`
    width: 50px !important;
    height: 50px !important;
    position: absolute;
    margin-top: 600px !important;
`;

const ObstacleCenter = styled.img`
    ${props =>
        props.position === 'final' && props.side === 'center'
            ? finalCenter
            : initCenter};
    transition: ${props =>
        props.position === 'final' && props.side === 'center' && '3.5s'};
    visibility: ${props =>
        props.position === 'final' && props.side === 'center'
            ? 'visible'
            : 'hidden'};
`;

export default ObstacleCenter;
