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
                        software engineering, mobile, and web application
                        development, infrastructure provisioning and quality
                        assurance. We provide exceptional professional services
                        in strategy, user experience, design, and full stack
                        engineering to guide you through the journey from the
                        simple MVP to a fully-fledged business.
                    </Text>
                </WelcomeWording>
                <div>
                    <a href="#services">
                        <Button primary>Learn More</Button>
                    </a>
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
