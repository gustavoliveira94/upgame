import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Track from '../styles/game/track';
import Car from '../styles/game/car';
import Turns from '../styles/init_game/turns';

import { moveCar, pauseGame, timeStart } from '../actions/game';

const Game = () => {
    const gameInit = useSelector(({ game }) => game);
    const dispatch = useDispatch();

    const numberStart = useCallback(() => {
        const start = setInterval(() => {
            if (gameInit.time === -1) {
                clearInterval(start);
            }
            dispatch(timeStart(gameInit.time--));
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const keyAction = e => {
        if (e.keyCode === 97 || e.which === 97) {
            dispatch(moveCar('a'));
        }
        if (e.keyCode === 115 || e.which === 115) {
            dispatch(moveCar('s'));
        }
        if (e.keyCode === 100 || e.which === 100) {
            dispatch(moveCar('d'));
        }
        if (e.keyCode === 27 || e.which === 27) {
            dispatch(pauseGame());
        }
    };

    useEffect(() => {
        if (gameInit.init.start) {
            numberStart();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameInit.init.start]);

    return (
        <Track
            onKeyDown={e => keyAction(e)}
            src={require('../assets/images/CENARIO_anima.gif')}
            move={gameInit.move}
            tabIndex="0"
        >
            {gameInit.time >= 0 ? <Turns>{gameInit.time}</Turns> : ''}
            <Car
                src={require('../assets/images/CARRO.png')}
                position={gameInit.move === 's'}
            />
        </Track>
    );
};

export default Game;
