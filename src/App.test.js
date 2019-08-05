import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow} from 'enzyme';
import EvenOdd from './Components/even-Odd';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EvenOdd />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('consigueme el componente EvenOdd , dentro de App', () => {
  
  const infoEvenOdd= shallow(<EvenOdd  />);
  expect(infoEvenOdd.find('EvenOdd ').length).toBe(1);
 
 });