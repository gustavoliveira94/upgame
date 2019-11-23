import { MOVE_CAR } from '../actions/actionsTypes';

const INITIAL_STATE = {
    move: 'a',
};

export const GameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOVE_CAR:
            return {
                ...state,
                move: action.data,
            };
        default:
            return state;
    }
};
