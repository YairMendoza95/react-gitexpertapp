import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    // Si se deja el useState vacío este sería undefined, por ello, se deja un string vacío
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        // Debido a que ya no es muy usado la parte del refresh completo del navegador, que es un comportamiento por default de los formularios se utiliza la siguiente linea de código
        e.preventDefault();
        console.log('handleSubmit llamado');

        if (inputValue.trim().length > 1) {
            // Como no se tiene acceso a las categorias del componente padre hace uso un callback como se muestra
            setCategories((cats) => [inputValue, ...cats]);
            setinputValue('');
        }
    };

    return (
        // Cuando se retorna na unica etiqueta agrupadora como es en este caso el form no es necesario agruparla dentro de un Fragment
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
