import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
    test('Debe retornar 10 elementos', async () => {
        const gifs = await getGifs('Naruto');
        expect(gifs.length).toBe(10);
    });
});
