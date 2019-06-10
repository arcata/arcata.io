import React from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
import {
    Service,
    Services,
    GeneralServicesInfo,
    ServiceDescription,
    Container,
    Illustration,
} from './styles';
import { Title, MainTitle } from 'components/title';
import Pad from 'components/pad';
import Text from 'components/text';

const ServicesC = () => (
    <Container>
        <Pad>
            <FlexItem flex-direction="column">
                <GeneralServicesInfo>
                    <MainTitle color="darkBlue" small>
                        End-to-end digital services
                    </MainTitle>
                    <Illustration />
                </GeneralServicesInfo>
            </FlexItem>
            <FlexItem>
                <Services>
                    <Flex wrap center>
                        <Service>
                            <img
                                src="./customer-insight.png"
                                width="64"
                                height="64"
                                alt="Engineering"
                            />
                            <Title color="darkBlue">Engineering</Title>
                            <ServiceDescription>
                                <Text small grey>
                                    Web applications need to work flawlessly
                                    every time, for every user, in myriad
                                    situations. Arcata integrates engineering
                                    strategy at the outset of your project in
                                    order to assess scope, technical
                                    requirements, approach, and feasibility.
                                    Doing this not only builds trust, it
                                    positions your custom software to prove
                                    value year after year.
                                </Text>
                            </ServiceDescription>
                        </Service>
                        <Service>
                            <img
                                src="./idea.png"
                                width="64"
                                height="64"
                                alt="Testing and Quality Assurance"
                            />
                            <Title color="darkBlue">
                                Testing and Quality Assurance
                            </Title>
                            <ServiceDescription>
                                <Text small grey>
                                    Our bleeding-edge web applications work
                                    flawlessly because we test relentlessly —
                                    for function, quality, and accuracy, from
                                    top to bottom, across all usage scenarios.
                                    Rigorous quality assurance throughout
                                    software development takes the tension out
                                    of launch day.
                                </Text>
                            </ServiceDescription>
                        </Service>
                    </Flex>
                    <Flex wrap center>
                        <Service>
                            <img
                                src="./conference.png"
                                width="64"
                                height="64"
                                alt="Team Augmentation"
                            />
                            <Title color="darkBlue">Team Augmentation</Title>
                            <ServiceDescription>
                                <Text small grey>
                                    Whether you’re an established brand or early
                                    stage startup, digital project development
                                    frequently calls for all-hands on deck. And
                                    if you don’t have those hands in-house,
                                    DockYard’s team of professional consultants
                                    is ready to supplement your staff, short or
                                    long term.
                                </Text>
                            </ServiceDescription>
                        </Service>
                        <Service>
                            <img
                                src="./roller-brush.png"
                                width="64"
                                height="64"
                                alt="Product Design"
                            />
                            <Title color="darkBlue">Product Design</Title>
                            <ServiceDescription>
                                <Text small grey>
                                    Product design is strategy made tangible.
                                    It’s the purpose-driven unification of
                                    complex components into simple, elegant user
                                    experiences — digital tools that draw
                                    technology and people together.
                                </Text>
                            </ServiceDescription>
                        </Service>
                    </Flex>
                </Services>
            </FlexItem>
        </Pad>
    </Container>
);

export default ServicesC;
