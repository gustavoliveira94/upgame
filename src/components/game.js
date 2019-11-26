import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Componets
import Obstacles from './obstacles';
import MobileGame from './mobile';

// Styles
import Track from '../styles/game/track';
import Car from '../styles/game/car';
import Turns from '../styles/init_game/turns';
import Turbo from '../styles/game/turbo';
import Vehicle from '../styles/game/vehicle';
import Win from '../styles/win';
import TextWin from '../styles/win/textwin';
import Turn from '../styles/game/turn';
import Container from '../styles/game/container';
import Close from '../styles/win/close';

// Actions
import {
    moveCar,
    pauseGame,
    timeStart,
    turbo,
    countTurns,
} from '../actions/game';

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

    const turnsCount = useCallback(() => {
        const turn = setInterval(() => {
            if (gameInit.turns.win) {
                clearInterval(turn);
            }
            dispatch(countTurns());
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameInit.turns.win]);

    const keyAction = e => {
        if ((e.keyCode === 37 || e.which === 37) && gameInit.move === 's') {
            dispatch(moveCar('a'));
        }
        if ((e.keyCode === 37 || e.which === 37) && gameInit.move === 'd') {
            dispatch(moveCar('s'));
        }
        if ((e.keyCode === 39 || e.which === 39) && gameInit.move === 'a') {
            dispatch(moveCar('s'));
        }
        if ((e.keyCode === 39 || e.which === 39) && gameInit.move === 's') {
            dispatch(moveCar('d'));
        }
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
        if (
            e.keyCode === 87 ||
            e.which === 87 ||
            e.keyCode === 38 ||
            e.which === 38
        ) {
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

    useEffect(() => {
        if (gameInit.time < 0) {
            turnsCount();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameInit.time]);

    return (
        <Track
            onKeyDown={e => keyAction(e)}
            src={require('../assets/images/CENARIO_anima.gif')}
            move={gameInit.move}
            tabIndex="0"
        >
            {gameInit.time >= 0 ? <Turns>{gameInit.time}</Turns> : ''}
            {gameInit.turns.win && (
                <Win>
                    <Close onClick={() => document.location.reload(true)}>
                        X
                    </Close>
                    <TextWin>Win!</TextWin>
                </Win>
            )}
            <Container>
                <Turn>
                    Turns:
                    <small>{gameInit.turns.turn}</small>
                </Turn>
                <Obstacles />
            </Container>
            <Vehicle turbo={gameInit.turbo.start}>
                <Car
                    src={require('../assets/images/CARRO.png')}
                    position={gameInit.move === 's'}
                    mobilePosition={gameInit.move === 'a'}
                    turbo={gameInit.turbo.start}
                />
                <Turbo
                    turbo={gameInit.turbo.start}
                    position={gameInit.move === 's'}
                    src={require('../assets/images/turbo.gif')}
                />
            </Vehicle>
            <MobileGame />
        </Track>
    );
};

export default Game;
