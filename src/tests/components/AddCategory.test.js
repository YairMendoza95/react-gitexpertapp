import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en eln componente <AddCategory/>', () => {
    // Simula una función
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    // Esta funcón se ejecuta antes de cada prueba
    beforeEach(() => {
        jest.clearAllMocks(); // Limpia los atributos y simulaciones que se hicieron
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe mostrar correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar el input', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo!!';

        // El segundo argumento que recibe el método simulate es el evento e, el cual tiene una propiedad llamada target que a su vez también tiene una propiedad llamada value
        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe de postear la información on submit', () => {
        // Se envía como parametro la funcion preventDefault, esa forma es la manera corta de hacerlo como una función tradicional, aunque también se puede hacer con arrow functions
        wrapper.find('form').simulate('submit', { preventDefault() {} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamr el setCategories y limpiar el inputChange', () => {
        const value = 'Hola mundo';
        const input = wrapper
            .find('input')
            .simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault() {} });
        expect(setCategories).toHaveBeenCalled();
        expect(input.prop('value')).toBe('');
    });
});
