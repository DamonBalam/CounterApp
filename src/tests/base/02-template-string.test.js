// import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas Unitarias 02-template-string.js', () => {
    test('getSaludo debe retornar Hola Arturo!', () => {
        const nombre = 'Arturo';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');
    });

    // getSaludo debe retornar Hola Carlos! si no enviamos argumento
    test('getSaludo debe retornar Hola Carlos!  si no enviamos argumento', () => {
        expect(getSaludo()).toBe('Hola Carlos!');
    });
});
