import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/input';
import Textarea from 'components/textarea';
import Button from 'components/button';
import Form from 'components/form';
import Flex, { FlexItem } from 'styled-flex-component';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            company: '',
            phone: '',
            letter: '',
        };
    }

    handleChange = field => e => {
        this.setState({ [field]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <Form action="https://formsubmit.co/hello@arcata.io" method="POST">
                <Flex column>
                    <Flex justifyBetween>
                        <Input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            placeholder="Your name"
                            name="name"
                        />
                        <Input
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            placeholder="Your email"
                            name="email"
                        />
                    </Flex>
                    <Flex justifyBetween>
                        <Input
                            type="text"
                            value={this.state.company}
                            onChange={this.handleChange('company')}
                            placeholder="Company (Optional)"
                            name="company"
                        />
                        <Input
                            type="text"
                            value={this.state.phone}
                            onChange={this.handleChange('phone')}
                            placeholder="Phone Number (Optional)"
                            name="phone"
                        />
                    </Flex>
                    <FlexItem>
                        <Textarea
                            value={this.state.letter}
                            onChange={this.handleChange('letter')}
                            placeholder="How we can help?"
                            name="letter"
                        />
                    </FlexItem>
                    <Flex justifyEnd>
                        <Button type="submit" primary>
                            Submit
                        </Button>
                    </Flex>
                </Flex>
            </Form>
        );
    }
}

ContactForm.propTypes = {
    data: PropTypes.object,
};

export default ContactForm;
