import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// styles
import Container from '../styles/obstacle/container';
import ObstacleLeft from '../styles/obstacle/obstacleleft';
import ObstacleCenter from '../styles/obstacle/obstaclecenter';
import ObstacleRight from '../styles/obstacle/obstacleright';

// actions
import { renderObstacle } from '../actions/game';

const Obstacles = () => {
    const dispatch = useDispatch();
    const stone = useSelector(({ game }) => game);

    const obstacle = useCallback(() => {
        const colision = setInterval(() => {
            if (stone.turns.win) {
                clearInterval(colision);
            }
            dispatch(renderObstacle());
        }, 2500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stone.turns.win]);

    useEffect(() => {
        if (stone.time < 0) {
            obstacle();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stone.time]);

    return (
        <Container>
            <ObstacleLeft
                src={require('../assets/images/obstacle.png')}
                position={stone.obstacle.position}
                side={stone.obstacle.side}
            />
            <ObstacleCenter
                src={require('../assets/images/obstacle.png')}
                position={stone.obstacle.position}
                side={stone.obstacle.side}
            />
            <ObstacleRight
                src={require('../assets/images/obstacle.png')}
                position={stone.obstacle.position}
                side={stone.obstacle.side}
            />
        </Container>
    );
};

export default Obstacles;
