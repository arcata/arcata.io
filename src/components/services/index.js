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
                    <Flex>
                        <Service>
                            <img
                                src="./customer-insight.png"
                                width="64"
                                height="64"
                                alt="Engineering"
                            />
                            <Title color="darkBlue">Engineering</Title>
                            <ServiceDescription>
                                Arcata integrates engineering strategy at the
                                outset of your project in order to assess scope,
                                technical requirements, approach, and
                                feasibility.
                            </ServiceDescription>
                        </Service>
                        <Service>
                            <img
                                src="./conference.png"
                                width="64"
                                height="64"
                                alt="Testing and Quality Assurance"
                            />
                            <Title color="darkBlue">Team augmentation</Title>
                            <ServiceDescription>
                                Our bleeding-edge web applications work
                                flawlessly because we test relentlessly — for
                                function, quality, and accuracy, from top to
                                bottom, across all usage scenarios. Rigorous
                                quality assurance throughout software
                                development takes the tension out of launch day.
                            </ServiceDescription>
                        </Service>
                    </Flex>
                    <Flex>
                        <Service>
                            <img
                                src="./idea.png"
                                width="64"
                                height="64"
                                alt="Business Analysis"
                            />
                            <Title color="darkBlue">Business Analysis</Title>
                            <ServiceDescription>
                                Create Payment Address Provide your payout
                                wallet address and callback URL to PayBear API.
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
                                Product design is strategy made tangible. It’s
                                the purpose-driven unification of complex
                                components into simple, elegant user experiences
                                — digital tools that draw technology and people
                                together.
                            </ServiceDescription>
                        </Service>
                    </Flex>
                </Services>
            </FlexItem>
        </Pad>
    </Container>
);

export default ServicesC;
