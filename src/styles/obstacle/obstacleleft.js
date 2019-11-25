import styled, { css } from 'styled-components';

const initLeft = css`
    width: 15px;
    height: 15px;
    margin-left: -40px !important;
    position: absolute;
    margin-top: 0;
`;

const finalLeft = css`
    width: 50px !important;
    height: 50px !important;
    position: absolute;
    margin-top: 600px !important;
    margin-left: -480px !important;
`;

const ObstacleLeft = styled.img`
    ${props =>
        props.position === 'final' && props.side === 'flex-start'
            ? finalLeft
            : initLeft};
    transition: ${props =>
        props.position === 'final' && props.side === 'flex-start' && '3.5s'};
    visibility: ${props =>
        props.position === 'final' && props.side === 'flex-start'
            ? 'visible'
            : 'hidden'};
`;

export default ObstacleLeft;
