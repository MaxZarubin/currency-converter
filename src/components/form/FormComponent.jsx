import React, { Component } from 'react';

import Input from './FormInput';
import Select from './FormSelect';

import { Form, Col, Button } from 'react-bootstrap';

class FormComponent extends Component {
    render(){
        return (
            <Form>
                <Form.Row>
                    <Col md="2"> 
                        <Input />
                    </Col>                                
                    <Col md="2"> 
                        <Select />
                    </Col>
                    <h5>to</h5>                            
                    <Col md="2"> 
                        <Select /> 
                    </Col>
                    <Button variant="primary">Primary</Button>
                </Form.Row>     
            </Form>            
        );
    };
};

export default FormComponent;