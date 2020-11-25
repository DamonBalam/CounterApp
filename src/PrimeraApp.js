import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo = 'Soy un subtitulo' }) => {
    return (
        <Fragment>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </Fragment>
    );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string,
    subtitulo: PropTypes.string,
};

export default PrimeraApp;
