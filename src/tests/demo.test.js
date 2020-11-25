describe('Pruebas en el archivo demo.test.js', () => {
    test('Deben ser iguales los Strings', () => {
        //1. inicialización
        const mensaje = 'Hola Mundo!';

        // 2. Estímulo
        const mensaje2 = `Hola Mundo!`;

        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });
});
