import React from 'react';
import { MainTitle, SubTitle } from 'components/title';
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
                    <SubTitle>
                        We are a boutique digital transformation consultancy and
                        software development company that provides cutting edge
                        engineering solutions. Since 2007 we have been a
                        visionary and a reliable software engineering partner
                        for world-class brands.
                    </SubTitle>
                </p>
                <div>
                    <Button>GET IN TOUCH</Button>
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
