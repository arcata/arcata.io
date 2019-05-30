import React from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
import {
    Service,
    Services,
    GeneralServicesInfo,
    ServiceDescription,
    Container,
} from './styles';
import { Title, MainTitle } from 'components/title';
import Button from 'components/button';

const ServicesC = () => (
    <Container>
        <Flex center full>
            <FlexItem flex-direction="column">
                <GeneralServicesInfo>
                    <Title color="darkBlue">
                        Arcata&rsquo;s comprehensive service suite
                    </Title>
                    <MainTitle color="darkBlue">
                        End-to-end digital transformation services
                    </MainTitle>
                    <ServiceDescription>
                        You can trust us for any kind of services and some of
                        the world class companies have also trusted us.
                    </ServiceDescription>
                    <Button>Get Quote</Button>
                </GeneralServicesInfo>
            </FlexItem>
            <FlexItem>
                <Services>
                    <Flex wrap>
                        <FlexItem>
                            <Service>
                                <img
                                    src="./customer-insight.png"
                                    width="64"
                                    height="64"
                                    alt="Research & Development"
                                />
                                <Title color="darkBlue">
                                    Research & Development
                                </Title>
                                <ServiceDescription>
                                    Let our technical expertise guide you
                                    through the journey from the simple MVP to a
                                    fully-fledged business.
                                </ServiceDescription>
                            </Service>
                        </FlexItem>
                        <FlexItem>
                            <Service>
                                <img
                                    src="./conference.png"
                                    width="64"
                                    height="64"
                                    alt="Team augmentation"
                                />
                                <Title color="darkBlue">
                                    Team augmentation
                                </Title>
                                <ServiceDescription>
                                    The cost of hiring new people and the time
                                    required to do it right should not slow down
                                    the momentum of your project.
                                </ServiceDescription>
                            </Service>
                        </FlexItem>
                        <FlexItem>
                            <Service>
                                <img
                                    src="./idea.png"
                                    width="64"
                                    height="64"
                                    alt="Business Analysis"
                                />
                                <Title color="darkBlue">
                                    Business Analysis
                                </Title>
                                <ServiceDescription>
                                    Create Payment Address Provide your payout
                                    wallet address and callback URL to PayBear
                                    API.
                                </ServiceDescription>
                            </Service>
                        </FlexItem>
                        <FlexItem>
                            <Service>
                                <img
                                    src="./roller-brush.png"
                                    width="64"
                                    height="64"
                                    alt="UI/UX Design"
                                />
                                <Title color="darkBlue">UI/UX Design</Title>
                                <ServiceDescription>
                                    Create Payment Address Provide your payout
                                    wallet address and callback URL to PayBear
                                    API.
                                </ServiceDescription>
                            </Service>
                        </FlexItem>
                    </Flex>
                </Services>
            </FlexItem>
        </Flex>
    </Container>
);

export default ServicesC;
