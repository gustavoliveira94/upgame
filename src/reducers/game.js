import {
    MOVE_CAR,
    INIT_GAME,
    PAUSE_GAME,
    TIME_START,
    START_TURBO,
    COUNT_TURNS,
    MOVE_OBSTACLE,
} from '../actions/actionsTypes';

const INITIAL_STATE = {
    move: 'a',
    init: {
        start: false,
        name: '',
    },
    time: 3,
    pause: false,
    turbo: {
        start: false,
        used: false,
    },
    turns: {
        meters: 0,
        turn: 0,
        win: false,
    },
    obstacle: {
        position: 'init',
        side: '',
        transition: false,
    },
};

export const GameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOVE_CAR:
            return {
                ...state,
                move: action.data,
            };
        case INIT_GAME:
            return {
                ...state,
                init: action.data,
            };
        case PAUSE_GAME:
            return {
                ...state,
                pause: action.data,
            };
        case TIME_START:
            return {
                ...state,
                time: action.data,
            };
        case START_TURBO:
            return {
                ...state,
                turbo: action.data,
            };
        case COUNT_TURNS:
            return {
                ...state,
                turns: action.data,
            };
        case MOVE_OBSTACLE:
            return {
                ...state,
                obstacle: action.data,
            };
        default:
            return state;
    }
};
