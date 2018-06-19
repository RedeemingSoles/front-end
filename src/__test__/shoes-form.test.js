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

  test('testing ShoesForm rending childName', () => {
    const middleware = [thunk, reporter, session];
    const mockStore = configureStore(middleware);
    const mountedShoesForm = mount(<Provider store={mockStore(testState)}><ShoesForm/></Provider>);
    expect((mountedShoesForm).find('childName')).toBeTruthy();
  });


  test('testing ShoesForm rending shoeType', () => {
    const middleware = [thunk, reporter, session];
    const mockStore = configureStore(middleware);
    const mountedShoesForm = mount(<Provider store={mockStore(testState)}><ShoesForm/></Provider>);
    expect((mountedShoesForm).find('shoeType')).toBeTruthy();
  });


  test('testing ShoesForm rending gender', () => {
    const middleware = [thunk, reporter, session];
    const mockStore = configureStore(middleware);
    const mountedShoesForm = mount(<Provider store={mockStore(testState)}><ShoesForm/></Provider>);
    expect((mountedShoesForm).find('gender')).toBeTruthy();
  });


  test('testing ShoesForm rending age', () => {
    const middleware = [thunk, reporter, session];
    const mockStore = configureStore(middleware);
    const mountedShoesForm = mount(<Provider store={mockStore(testState)}><ShoesForm/></Provider>);
    expect((mountedShoesForm).find('age')).toBeTruthy();
  });


  test('testing ShoesForm rending size', () => {
    const middleware = [thunk, reporter, session];
    const mockStore = configureStore(middleware);
    const mountedShoesForm = mount(<Provider store={mockStore(testState)}><ShoesForm/></Provider>);
    expect((mountedShoesForm).find('size')).toBeTruthy();
  });


  test('testing ShoesForm rending message', () => {
    const middleware = [thunk, reporter, session];
    const mockStore = configureStore(middleware);
    const mountedShoesForm = mount(<Provider store={mockStore(testState)}><ShoesForm/></Provider>);
    expect((mountedShoesForm).find('message')).toBeTruthy();
  });
});
