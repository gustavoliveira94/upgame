import {
    MOVE_CAR,
    INIT_GAME,
    PAUSE_GAME,
    TIME_START,
    START_TURBO,
    COUNT_TURNS,
    MOVE_OBSTACLE,
} from './actionsTypes';

export const moveCar = data => {
    return dispatch => {
        dispatch({
            type: MOVE_CAR,
            data,
        });
    };
};

export const initGame = name => {
    return dispatch => {
        try {
            if (name === '') throw new Error('Nenhum nome registrado');

            dispatch({
                type: INIT_GAME,
                data: { start: true, name },
            });
        } catch (e) {
            alert('Insira um nome para iniciar!');
        }
    };
};

export const pauseGame = () => {
    return (dispatch, getState) => {
        const pause = getState();

        if (pause.game.time < 0) {
            dispatch({
                type: PAUSE_GAME,
                data: !pause.game.pause,
            });
        }
    };
};

export const timeStart = data => {
    return dispatch => {
        dispatch({
            type: TIME_START,
            data,
        });
    };
};

export const turbo = () => {
    return (dispatch, getState) => {
        const used = getState();

        if (!used.game.turbo.used && used.game.time < 0) {
            dispatch({
                type: START_TURBO,
                data: { start: true, used: true },
            });
        } else if (used.game.turbo.used && used.game.time < 0) {
            dispatch({
                type: START_TURBO,
                data: { start: false, used: true },
            });
        }
    };
};

export const countTurns = () => {
    return (dispatch, getState) => {
        const turns = getState();

        if (
            turns.game.turns.meters < 20 &&
            turns.game.time < 0 &&
            !turns.game.turns.win &&
            !turns.game.pause
        ) {
            dispatch({
                type: COUNT_TURNS,
                data: {
                    meters: turns.game.turns.meters + 1,
                    turn: turns.game.turns.turn,
                    win: false,
                },
            });
        }

        if (turns.game.turns.meters >= 20 && !turns.game.turns.win) {
            dispatch({
                type: COUNT_TURNS,
                data: {
                    meters: 0,
                    turn: turns.game.turns.turn + 1,
                    win: false,
                },
            });
        }

        if (turns.game.turns.turn === 15 && !turns.game.turns.win) {
            dispatch({
                type: COUNT_TURNS,
                data: { meters: 0, turn: turns.game.turns.turn, win: true },
            });
        }
    };
};

export const renderObstacle = () => {
    return (dispatch, getState) => {
        const random = ['flex-start', 'center', 'flex-end'];

        // eslint-disable-next-line no-unused-expressions
        const render = random[Math.floor(Math.random() * Math.floor(3))];

        const transition = getState();

        if (
            transition.game.obstacle.position === 'init' &&
            !transition.game.pause
        ) {
            dispatch({
                type: MOVE_OBSTACLE,
                data: { position: 'final', transition: true, side: render },
            });
        } else {
            dispatch({
                type: MOVE_OBSTACLE,
                data: { position: 'init', transition: true, side: render },
            });
        }
    };
};
