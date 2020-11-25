import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas Unitarias del archivo o5-funciones.js', () => {
    test('getUser debe retornar un Objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        };

        const user = getUser();

        expect(user).toEqual(userTest);
    });

    // tarea

    test('getUsuarioActivo debe retornar un Objeto', () => {
        const nombre = 'Arturo';

        const userTest = {
            uid: 'ABC567',
            username: nombre,
        };

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(userTest);
    });
});
