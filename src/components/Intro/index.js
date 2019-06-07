import React from 'react';
import { MainTitle } from 'components/title';
import Button from 'components/button';
import Pad from 'components/pad';
import Text from 'components/text';

import {
    Container,
    WelcomeContainer,
    WelcomeIllustration,
    WelcomeTitle,
    WelcomeWording,
} from './styles';

const Intro = () => (
    <Container>
        <Pad>
            <WelcomeContainer>
                <WelcomeTitle>
                    <MainTitle>
                        We help innovators build awesome digital products
                    </MainTitle>
                </WelcomeTitle>
                <WelcomeWording>
                    <Text regular>
                        Arcata is a digital product agency offering custom
                        software, mobile, and web application development
                        consulting. We provide exceptional professional services
                        in strategy, user experience, design, and full stack
                        engineering to bring brilliant digital ideas into being
                        for avant-garde clients such as Netflix, Apple, Nasdaq,
                        and Zipcar.
                    </Text>
                </WelcomeWording>
                <div>
                    <Button primary>Learn More</Button>
                </div>
            </WelcomeContainer>

            <WelcomeIllustration />

            <div className="wave">
                <img src="./wave.svg" alt="wave" />
            </div>
        </Pad>
    </Container>
);

export default Intro;
