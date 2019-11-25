import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

// Styles
import Main from './styles/main';

// Components
import Game from './components/game';
import Init from './components/init';
import LeftContainer from './components/leftcontainer';
import RightContainer from './components/rightcontainer';
import PauseGame from './components/pause';

const App = () => {
    const [state, setState] = useState({ start: 3 });
    const init = useSelector(({ game }) => game);

    const numberStart = useCallback(() => {
        const start = setInterval(() => {
            if (state.start === 0) {
                clearInterval(start);
            }
            setState({ ...state, start: state.start-- });
        }, 1000);
    }, [state]);

    useEffect(() => {
        if (init.init.start) {
            numberStart();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [init.init.start]);

    return (
        <Main>
            {!init.init.start && <Init />}
            {init.pause && <PauseGame />}
            <LeftContainer />
            <Game />
            <RightContainer />
        </Main>
    );
};

export default App;
