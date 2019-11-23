import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Track from '../styles/game/track';
import Car from '../styles/game/car';
import Turns from '../styles/init_game/turns';

import { moveCar } from '../actions/game';

const Game = () => {
    const gameInit = useSelector(({ game }) => game);
    const dispatch = useDispatch();
    const [state, setState] = useState({ start: 3 });

    const numberStart = useCallback(() => {
        const start = setInterval(() => {
            if (state.start === -1) {
                clearInterval(start);
            }
            setState({ ...state, start: state.start-- });
        }, 1000);
    }, [state]);

    const keyMoveCar = e => {
        if (e.keyCode === 97 || e.which === 97) {
            dispatch(moveCar('a'));
        }
        if (e.keyCode === 115 || e.which === 115) {
            dispatch(moveCar('s'));
        }
        if (e.keyCode === 100 || e.which === 100) {
            dispatch(moveCar('d'));
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
            onKeyPress={e => keyMoveCar(e)}
            src={require('../assets/images/CENARIO_anima.gif')}
            move={gameInit.move}
            tabIndex="0"
        >
            {state.start >= 0 ? <Turns>{state.start}</Turns> : ''}
            <Car
                src={require('../assets/images/CARRO.png')}
                position={gameInit.move === 's'}
            />
        </Track>
    );
};

export default Game;
