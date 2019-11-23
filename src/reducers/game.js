import { MOVE_CAR, INIT_GAME } from '../actions/actionsTypes';

const INITIAL_STATE = {
    move: 'a',
    init: {
        start: false,
        name: '',
        rounds: 0,
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
        default:
            return state;
    }
};
