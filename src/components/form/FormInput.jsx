import React from 'react';

import { Form } from 'react-bootstrap';

const FormInput = () => {
    return (
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Enter amount"/>
        </Form.Group>
    );
}

export default FormInput;