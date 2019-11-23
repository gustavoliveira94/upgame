import { combineReducers } from 'redux';

import { GameReducer } from './game';

export const Reducers = combineReducers({
    game: GameReducer,
});
