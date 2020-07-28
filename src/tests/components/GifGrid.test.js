import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); // Simula la llamada al archivo del path, y controla la informacion que retorna

describe('Pruebas en <GifGrid/>', () => {
    const category = 'Naruto';

    test('Debe mostrar el componente correctamente', () => {
        // Simula la data que recibe el componente
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se cargan las imagenes', () => {
        const gifs = [
            {
                id: 'ABC',
                url: 'https://loakmasd/1.jpg',
                title: 'Cualquier cosa',
            },
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length); //Compueba que el # de Items sea igual el de gifs
    });
});
