import React from 'react';

import { Button } from 'react-bootstrap';

const Butn = ({ onCalculate }) => {
    return (
        <Button variant="primary" onClick={onCalculate} className="btn">Calculate</Button>
    );
}

export default Butn;