import React from 'react';

import ContainerLeft from '../styles/main/containerleft';
import Keys from '../styles/main/containerleft/keys';
import Button from '../styles/main/containerleft/keys/button';

const LeftContainer = () => {
    return (
        <ContainerLeft>
            <Keys>
                <Button>A</Button>
                <Button>S</Button>
                <Button>D</Button>
            </Keys>
        </ContainerLeft>
    );
};

export default LeftContainer;
