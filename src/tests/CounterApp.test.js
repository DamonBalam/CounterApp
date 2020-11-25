import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import CounterApp from '../CounterApp';
describe('Pruebas de CounterApp', () => {
    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('Debe mostrar <CounterApp/> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto 100', () => {
        const valor = 100;
        const wrapper = shallow(<CounterApp valor={valor} />);

        const texth3 = wrapper.find('h3').text().trim();

        expect(texth3).toBe(`${valor}`);
    });

    test('Debe incrementar contador +1', () => {
        wrapper.find('button').at(0).simulate('click');

        const texth3 = wrapper.find('h3').text().trim();

        expect(texth3).toBe('11');
    });

    test('Debe decrementar contador -1', () => {
        wrapper.find('button').at(2).simulate('click');

        const texth3 = wrapper.find('h3').text().trim();

        expect(texth3).toBe('9');
    });

    test('Debe resetear el valor por defecto con el boton de reset', () => {
        
        const wrapper = shallow(<CounterApp valor={105} />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');

        wrapper.find('button').at(1).simulate('click');

        const texth3 = wrapper.find('h3').text().trim();

        expect(texth3).toBe('105');
    });
});
