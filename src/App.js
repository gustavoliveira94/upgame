import React from 'react';

import Main from './styles/main';

import Game from './components/game';
import LeftContainer from './components/leftcontainer';
import RightContainer from './components/rightcontainer';

const App = () => {
    return (
        <Main>
            <LeftContainer />
            <Game />
            <RightContainer />
        </Main>
    );
};

export default App;
