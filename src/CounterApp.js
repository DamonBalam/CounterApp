import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ valor = 10 }) => {
    const [counter, setCounter] = useState(valor);

    const handleClick = () => {
        setCounter(counter + 1);
    };

    const handleSubtract = () => {
        setCounter(valor);
    };

    const handleReset = () => {
        setCounter(counter - 1);
    };

    return (
        <Fragment>
            <h2>CounterApp</h2>
            <h3> {counter}</h3>
            <button onClick={handleClick}>+1</button>
            <button onClick={handleSubtract}>Reset</button>
            <button onClick={handleReset}> -1</button>
        </Fragment>
    );
};

CounterApp.propTypes = {
    valor: PropTypes.number,
};

export default CounterApp;
