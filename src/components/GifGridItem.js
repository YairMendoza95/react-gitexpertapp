import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ title, url }) => {
    return (
        // En los componentes las clases de CSS se asignan por medio de la palabra className, debido a que como se están ocupando archivos de JS, si uno escribe solo class="", REact no sabe si es una clase de CSS o de JS
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <p>{title ? title : 'imagen'}</p>
        </div>
    );
};

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default GifGridItem;
