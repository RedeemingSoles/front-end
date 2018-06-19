import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Dashboard from '../components/dashboard/dashboard';
import reporter from '../lib/redux-reporter';
import session from '../lib/redux-session';
import thunk from '../lib/redux-thunk';

configureEnzyme({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  const testState = {
    shoes: [],
  };

  test('testing dashboard and store', () => {
    const middleware = [thunk, reporter, session];
    const mockStore = configureStore(middleware);
    const mountedDashboard = mount(<Provider store={mockStore(testState)}><Dashboard/></Provider>);
    expect((mountedDashboard).find('h1')).toBeTruthy();
  });
});
