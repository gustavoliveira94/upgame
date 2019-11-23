import {
    MOVE_CAR,
    INIT_GAME,
    PAUSE_GAME,
    TIME_START,
} from '../actions/actionsTypes';

const INITIAL_STATE = {
    move: 'a',
    init: {
        start: false,
        name: '',
        rounds: 0,
    },
    time: 3,
    pause: false,
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
        default:
            return state;
    }
};
