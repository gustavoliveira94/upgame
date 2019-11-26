import React from 'react';
import { useDispatch } from 'react-redux';

// Styles
import Mobile from '../styles/mobile';
import Container from '../styles/mobile/container';
import Buttons from '../styles/mobile/buttons';

// Actions
import { moveCar, turbo } from '../actions/game';

const MobileGame = () => {
    const dispatch = useDispatch();

    return (
        <Mobile>
            <Container>
                <div>
                    <Buttons onClick={() => dispatch(turbo())}>TURBO</Buttons>
                </div>
                <div>
                    <Buttons onClick={() => dispatch(moveCar('a'))}>
                        LEFT
                    </Buttons>
                    <Buttons onClick={() => dispatch(moveCar('s'))}>
                        CENTER
                    </Buttons>
                    <Buttons onClick={() => dispatch(moveCar('d'))}>
                        RIGHT
                    </Buttons>
                </div>
            </Container>
        </Mobile>
    );
};

export default MobileGame;
