import { MOVE_CAR } from './actionsTypes';

export const moveCar = data => {
    return dispatch => {
        dispatch({
            type: MOVE_CAR,
            data,
        });
    };
};
