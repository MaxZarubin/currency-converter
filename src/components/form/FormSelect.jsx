import React from 'react';

import Option from './SelectOption';

import { Form } from 'react-bootstrap';

const FormSelect = ({ currencies, id, onChangeSelect }) => {

    const options = currencies.map(item => {
        return <Option title={item} key={item} />;
    });

    return (
        <Form.Group onChange={onChangeSelect}>
            <Form.Control as="select" id={id}>
                {options}
            </Form.Control>
        </Form.Group>
    );
}

export default FormSelect;