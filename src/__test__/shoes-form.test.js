import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import reporter from '../lib/redux-reporter';
import session from '../lib/redux-session';
import thunk from '../lib/redux-thunk';
import ShoesForm from '../components/shoes-form/shoes-form';

configureEnzyme({ adapter: new Adapter() });

describe('ShoeForm testing', () => {
  const testState = {
    shoes: [],
  };

  test('testing ShoesForm', () => {
    const middleware = [thunk, reporter, session];
    const mockStore = configureStore(middleware);
    const mountedShoesForm = mount(<Provider store={mockStore(testState)}><ShoesForm/></Provider>);
    expect((mountedShoesForm).find('input')).toBeTruthy();
  });

  test('testing ShoesForm', () => {
    const middleware = [thunk, reporter, session];
    const mockStore = configureStore(middleware);
    const mountedShoesForm = mount(<Provider store={mockStore(testState)}><ShoesForm/></Provider>);
    expect((mountedShoesForm).find('input')).toBeTruthy();
  });
});
