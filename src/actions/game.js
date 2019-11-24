import {
    MOVE_CAR,
    INIT_GAME,
    PAUSE_GAME,
    TIME_START,
    START_TURBO,
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
