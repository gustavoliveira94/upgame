import React from 'react';
import { useDispatch } from 'react-redux';

// Styles
import Container from '../styles/pause_game';
import Pause from '../styles/pause_game/pause';

// Actions
import { pauseGame } from '../actions/game';

const PauseGame = () => {
    const dispatch = useDispatch();

    const keyAction = e => {
        if (e.keyCode === 27 || e.which === 27) {
            dispatch(pauseGame());
        }
    };

    return (
        <Container onKeyDown={e => keyAction(e)} tabIndex="0">
            <Pause>Pause</Pause>
        </Container>
    );
};

export default PauseGame;
