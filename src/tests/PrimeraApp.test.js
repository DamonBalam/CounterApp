// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import PrimeraApp from '../PrimeraApp';

describe('Prueba de PrimeraApp', () => {
    // test('Debe de mostrar el mensaje "Hola,Soy Goku"', () => {
    //     const saludo = 'Hola, soy Goku';
    //     const { getByText } = render(<PrimeraApp saludo={saludo}/>);
    //     expect( getByText( saludo ) ).toBeInTheDocument();
    // });

    test('Debe mostrar <PrimeraApp/> correctamente', () => {
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Goku';
        const subtitulo = 'Soy un sayayin';
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);
    });
});
