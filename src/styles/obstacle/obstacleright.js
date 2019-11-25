import styled, { css } from 'styled-components';

const initRight = css`
    width: 15px;
    height: 15px;
    position: absolute;
    margin-top: 0;
`;

const finalRight = css`
    width: 50px;
    height: 50px;
    position: absolute;
    margin-top: 400px !important;
    margin-left: 250px;
`;

const ObstacleRight = styled.img`
    ${props =>
        props.position === 'final' && props.side === 'flex-end'
            ? finalRight
            : initRight};
    transition: ${props =>
        props.position === 'final' && props.side === 'flex-end' && '3.5s'};
    visibility: ${props =>
        props.position === 'final' && props.side === 'flex-end'
            ? 'visible'
            : 'hidden'};
`;

export default ObstacleRight;
