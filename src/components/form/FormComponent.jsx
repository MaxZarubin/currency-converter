import React, { Component } from 'react';
import axios from 'axios';

import Input from './FormInput';
import Button from './Button';

import Select from 'react-select';
import { Form, Col } from 'react-bootstrap';

import { URL, API_KEY } from '../../config/config';

class FormComponent extends Component {
    state = {
        currencies: [],
        inputValue: 0,
        firstСurrency: 'ALL',
        secondСurrency: 'ALL',
        calculations: null,
        result: ''
    };

    componentDidMount(){
        const queryString = `${URL}currencies?apiKey=${API_KEY}`;

        axios.get(queryString).then(response => {
            const currencies = [];
            let res = response.data.results;

            for(let key in res){
                currencies.push({ value: res[key].id, label: res[key].currencyName});
            }
 
			this.setState({
				currencies
			});
		});
    }

    handleCalculate = () => {
        const { firstСurrency, secondСurrency, inputValue } = this.state;
        const amount = (inputValue && isFinite(inputValue) && inputValue > 0) ? inputValue : null;

        if(!amount){
            return;
        }

        const queryString = `${URL}convert?q=${firstСurrency}_${secondСurrency}&compact=ultra&apiKey=${API_KEY}`;
 
        axios.get(queryString).then(response => {
            for(let key in response.data){
                this.setState({
                    calculations: (response.data[key] * amount).toFixed(3),
                }, this.handleSetResult);
            };
		});       
    }

    handleChangeInput = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    handleChangeFirstSelect = (event) => {
        this.setState({
			firstСurrency: event.value
        });
    }

    handleChangeSecondSelect = (event) => {
        this.setState({
			secondСurrency: event.value
        });
    }    

    handleSetResult = () => {
        const { calculations, inputValue, firstСurrency, secondСurrency } = this.state;
        this.setState({
            result: `${inputValue} ${firstСurrency} = ${calculations} ${secondСurrency}`
        });
    }

    render(){
        const { currencies, result } = this.state;
        return (
            <>
                <Form className="form">
                    <Form.Row className="justify-content-md-center">
                        <Col md="2"> 
                            <Input onChangeInput={this.handleChangeInput} />
                        </Col>                                
                        <Col md="3"> 
                            <Select 
                                options={currencies} 
                                onChange={this.handleChangeFirstSelect} 
                            />
                        </Col>
                        <h5>to</h5>                            
                        <Col md="3"> 
                            <Select 
                                options={currencies} 
                                onChange={this.handleChangeSecondSelect} 
                            /> 
                        </Col>
                        <Button onCalculate={this.handleCalculate}/>
                    </Form.Row>     
                </Form>
                {result && <h2>{result}</h2>}
            </>            
        );
    };
};

export default FormComponent;