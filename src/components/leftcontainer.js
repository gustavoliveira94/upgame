import React from 'react';

import ContainerLeft from '../styles/main/containerleft';
import Keys from '../styles/main/containerleft/keys';
import Button from '../styles/main/containerleft/keys/button';
import Container from '../styles/main/containerleft/keys/container';

const LeftContainer = () => {
    return (
        <ContainerLeft>
            <Container>
                <Keys>
                    <Button>W</Button>
                </Keys>
                <Keys>
                    <Button>A</Button>
                    <Button>S</Button>
                    <Button>D</Button>
                </Keys>
            </Container>
        </ContainerLeft>
    );
};

export default LeftContainer;
