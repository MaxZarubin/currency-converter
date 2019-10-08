import React from 'react';

import { Form } from 'react-bootstrap';

const FormInput = ({ onChangeInput }) => {
    return (
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Enter amount" onChange={onChangeInput}/>
        </Form.Group>
    );
}

export default FormInput;