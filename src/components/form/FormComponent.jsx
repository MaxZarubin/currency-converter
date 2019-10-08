import React, { Component } from 'react';
import axios from 'axios';

import Input from './FormInput';
import Select from './FormSelect';
import Button from './Button';

import { url, apiKey } from '../../config/config';
import { Form, Col } from 'react-bootstrap';

class FormComponent extends Component {
    state = {
        currencies: [],
        inputValue: 0,
        firstСurrency: 'ALL',
        secondСurrency: 'ALL',
        calculations: null,
        answer: ''
    };

    componentDidMount(){
        const queryString = `${url}currencies?apiKey=${apiKey}`;

        axios.get(queryString).then(response => {
            const currencieId = [];
            let res = response.data.results;

            for(let key in res){
                currencieId.push(`${res[key].id}-${res[key].currencyName}`);
            }

			this.setState({
				currencies: currencieId
			});
		});
    }

    handleCalculate = () => {
        const { firstСurrency, secondСurrency, inputValue } = this.state;
        const amount = (inputValue && isFinite(inputValue) && inputValue > 0) ? inputValue : null;

        if(!amount){
            return;
        }

        const queryString = `${url}convert?q=${firstСurrency}_${secondСurrency}&compact=ultra&apiKey=${apiKey}`;
 
        axios.get(queryString).then(response => {
            for(let key in response.data){
                this.setState({
                    calculations: (response.data[key] * amount).toFixed(3),
                }, this.handleSetAnswer);
            };
		});       
    }

    handleChangeInput = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    handleChangeSelect = (event) => {
        const { value, id } = event.target;

        if(id == 1){
            this.setState({
				firstСurrency: value.split('-')[0]
            });
            return;
        };
        this.setState({
            secondСurrency: value.split('-')[0]
        });
    }

    handleSetAnswer = () => {
        const { calculations, inputValue, firstСurrency, secondСurrency } = this.state;
        this.setState({
            answer: `${inputValue} ${firstСurrency} = ${calculations} ${secondСurrency}`
        });
    }

    render(){
        const { currencies, answer  } = this.state;

        return (
            <>
                <Form className="form">
                    <Form.Row className="justify-content-md-center">
                        <Col md="2"> 
                            <Input onChangeInput={this.handleChangeInput} />
                        </Col>                                
                        <Col md="2"> 
                            <Select 
                                currencies={currencies} 
                                id="1" 
                                onChangeSelect={this.handleChangeSelect} 
                            />
                        </Col>
                        <h4>to</h4>                            
                        <Col md="2"> 
                            <Select 
                                currencies={currencies} 
                                id="2" 
                                onChangeSelect={this.handleChangeSelect} 
                            /> 
                        </Col>
                        <Button onCalculate={this.handleCalculate}/>
                    </Form.Row>     
                </Form>
                {answer && <h2>{answer}</h2>}
            </>            
        );
    };
};

export default FormComponent;