import React from 'react';
import { MainTitle } from 'components/title';
import Button from 'components/button';
import Pad from 'components/pad';

import { Container, Welcome, WelcomeIllustration } from './styles';

const Intro = () => (
    <Container>
        <Pad>
            <Welcome>
                <p>
                    <MainTitle>
                        We help innovators build awesome digital products
                    </MainTitle>
                </p>
                <p>
                    Arcata is a digital product agency offering custom software,
                    mobile, and web application development consulting. We
                    provide exceptional professional services in strategy, user
                    experience, design, and full stack engineering to bring
                    brilliant digital ideas into being for avant-garde clients
                    such as Netflix, Apple, Nasdaq, and Zipcar.
                </p>
                <div>
                    <Button primary>Learn More</Button>
                </div>
            </Welcome>

            <WelcomeIllustration />

            <div className="wave">
                <img src="./wave.svg" alt="wave" />
            </div>
        </Pad>
    </Container>
);

export default Intro;
