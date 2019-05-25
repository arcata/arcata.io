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
                We help innovators build awesome digital products
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
                <Button>GET IN TOUCH</Button>
            </div>
        </S.Welcome>

        <S.WelcomeIllustration />

        <div className="wave">
            <img src="./wave.svg" alt="wave" />
        </div>
    </S.Container>
);

export default Intro;
