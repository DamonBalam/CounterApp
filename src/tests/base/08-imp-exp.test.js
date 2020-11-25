import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en el archivo 08-imp-exp.js', () => {
    test('Debe retornar un Heroe por ID', () => {
        const id = 1;

        const heroe = getHeroeById(id);

        const heroeData = heroes.find((h) => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe retornar Undefined si Heroe no existe', () => {
        const id = 10;

        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('Debe retornar un Arreglo de Heroes de DC', () => {
        const owner = 'DC';

        const heroes = getHeroesByOwner(owner);

        const arrDC = heroes.filter((h) => h.owner === owner);

        expect(heroes).toEqual(arrDC);
    });

    test('Debe retornar un Arreglo length 2 de Heroes de Marvel', () => {
        const owner = 'Marvel';

        const heroes = getHeroesByOwner(owner);

        // const arr = heroes.filter((h) => h.owner === owner);

        expect(heroes.length).toEqual(2);
    });
});
