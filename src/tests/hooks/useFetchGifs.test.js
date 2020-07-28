import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe eretornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetchGifs('Naruto')
        );
        const { data, loading } = result.current;

        await waitForNextUpdate(); // Es pera el siguiente cambio en el state

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe retornar un arreglo de imagenes y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetchGifs('Naruto')
        );
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});
