import { getImagen } from '../../base/11-async-await';

describe('Pruebas en 11-async-await', () => {
    test('getImagen retorna la url de la imagen ', async () => {
        const url = await getImagen();

        expect(typeof url).toBe('string');
    });
});
