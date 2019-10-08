import React from 'react';

import Form from '../components/form/FormComponent';

import { Jumbotron, Container } from 'react-bootstrap';

const App = () => {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>Currency Converter</h1>
                    <Form />
                </Container>
            </Jumbotron>
        );
}

export default App;