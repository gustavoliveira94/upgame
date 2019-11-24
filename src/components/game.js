import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Track from '../styles/game/track';
import Car from '../styles/game/car';
import Turns from '../styles/init_game/turns';

import { moveCar, pauseGame, timeStart, turbo } from '../actions/game';

const Game = () => {
    const gameInit = useSelector(({ game }) => game);
    const dispatch = useDispatch();

    const numberStart = useCallback(() => {
        const start = setInterval(() => {
            if (gameInit.time < 0) {
                clearInterval(start);
            }
            dispatch(timeStart(gameInit.time--));
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const pauseTurbo = useCallback(() => {
        const turboInit = setInterval(() => {
            if (gameInit.time < 0 && gameInit.turbo.used) {
                clearInterval(turboInit);
            }
            dispatch(turbo());
        }, 10000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(gameInit);

    const keyAction = e => {
        if (e.keyCode === 65 || e.which === 65) {
            dispatch(moveCar('a'));
        }
        if (e.keyCode === 83 || e.which === 83) {
            dispatch(moveCar('s'));
        }
        if (e.keyCode === 68 || e.which === 68) {
            dispatch(moveCar('d'));
        }
        if (e.keyCode === 27 || e.which === 27) {
            dispatch(pauseGame());
        }
        if (e.keyCode === 87 || e.which === 87) {
            dispatch(turbo());
        }
    };

    useEffect(() => {
        if (gameInit.turbo.start) {
            pauseTurbo();
        }
        if (gameInit.init.start) {
            numberStart();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameInit.init.start, gameInit.turbo]);

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
                turbo={gameInit.turbo.start}
            />
        </Track>
    );
};

export default Game;
