import React /* { useState, useEffect } */ from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    /* useEffect(() => {
        
        getGifs(category).then(setImages);
    }, [category]); */

    return (
        <>
            <h3 className="animate__animated animate__fadeInDown">
                {category}
            </h3>
            {loading && (
                <p className="animate__animated animate__flash">Cargando</p>
            )}
            <div className="card-grid">
                {images.map((img) => (
                    // Cuando se envían objetos con varias propiedades, como atributo en el lado del componente padre se puede destructurar con el operador Spread
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};

export default GifGrid;
