import React from 'react';
import Title from 'components/title';
import Button from 'components/button';
import * as S from './styles';
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
        number: {
            value: 20,
            density: {
                enable: true,
                value_area: 800,
            },
        },
    },
};

const Intro = () => (
    <S.Container>
        <Particles className="particles" params={particlesOptions} />
        <S.Welcome>
            <Title.MainTitle size="large">
                Launching digital businesses
            </Title.MainTitle>
            <Title.SubTitle>
                We are a boutique digital transformation consultancy and
                software development company that provides cutting edge
                engineering solutions
            </Title.SubTitle>
            <Title.SubTitle>
                Since 2007 we have been a visionary and a reliable software
                engineering partner for world-class brands.
            </Title.SubTitle>
            <div>
                <Button>Get In Touch</Button>
            </div>
        </S.Welcome>

        <S.WelcomeIllustration image="src/images/under_construction.svg" />
    </S.Container>
);

export default Intro;
