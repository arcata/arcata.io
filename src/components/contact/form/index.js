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
            letter: '',
        };
    }

    handleChange = field => e => {
        this.setState({ [field]: e.target.value });
    };

    handleSubmit = data => {};

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Flex column>
                    <Flex justifyBetween>
                        <Input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            placeholder="Your name"
                        />
                        <Input
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            placeholder="Your email"
                        />
                    </Flex>
                    <FlexItem>
                        <Textarea
                            value={this.state.letter}
                            onChange={this.handleChange('letter')}
                            placeholder="How we can help?"
                        />
                    </FlexItem>
                    <FlexItem>
                        <Button type="submit">Submit</Button>
                    </FlexItem>
                </Flex>
            </Form>
        );
    }
}

ContactForm.propTypes = {
    data: PropTypes.object,
};

export default ContactForm;
