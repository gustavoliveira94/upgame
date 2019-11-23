import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// styles
import InitGame from '../styles/init_game';
import Container from '../styles/init_game/container';
import Input from '../styles/init_game/input';
import Button from '../styles/init_game/button';

import { initGame } from '../actions/game';

const Init = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({ name: '', start: false });

    const handleInputName = e => {
        setState({ ...state, name: e.target.value });
    };

    return (
        <Container>
            <InitGame>
                <Input type="text" onChange={e => handleInputName(e)} />
            </InitGame>
            <Button onClick={() => dispatch(initGame(state.name))}>
                Iniciar
            </Button>
        </Container>
    );
};

export default Init;
