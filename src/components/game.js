import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Track from '../styles/game/track';
import Car from '../styles/game/car';

import { moveCar } from '../actions/game';

const Game = () => {
    const move = useSelector(state => state);
    const dispatch = useDispatch();

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

    return (
        <Track
            onKeyPress={e => keyMoveCar(e)}
            src={require('../assets/images/CENARIO_anima.gif')}
            move={move.game.move}
            tabIndex="0"
        >
            <Car
                src={require('../assets/images/CARRO.png')}
                position={move.game.move === 's'}
            />
        </Track>
    );
};

export default Game;
