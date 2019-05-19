import React from 'react';
import Title from 'components/title';
import * as S from './styles';
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }

const Intro = () => (
    <S.Container>
        <Particles className="particles" params={particlesOptions}/>
        <S.Welcome>
            <Title size="large">Launching digital businesses</Title>
            <Title>
                Our mission is to help small and medium-sized companies launch products that drive innovation and make a better tomorrow happen today.
            </Title>
        </S.Welcome>
        <div>
            <img src={'welcome1.png'} alt="Rock it!"/>
        </div>
    </S.Container>
);

export default Intro;
