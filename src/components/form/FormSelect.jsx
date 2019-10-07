import React from 'react';

import { Form } from 'react-bootstrap';

const FormSelect = () => {
    return (
        <Form.Group>
            <Form.Control as="select">
                <option>USD</option>
            </Form.Control>
        </Form.Group>
    );
}

export default FormSelect;