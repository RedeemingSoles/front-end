import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import reporter from '../lib/redux-reporter';
import session from '../lib/redux-session';
import thunk from '../lib/redux-thunk';
import RequestItem from '../components/request-item/request-item';


configureEnzyme({ adapter: new Adapter() });

describe('Request Item testing', () => {
  const testState = {
    requestItem: null,
    requestItemRemove: null,
    requestItemUpdate: null,
  };

  test('testing RequestItem', () => {
    const middleware = [thunk, reporter, session];
    const mockStore = configureStore(middleware);
    const mountedRequestItem = mount(<Provider store={mockStore(testState)}><RequestItem/>
    </Provider>);
    expect((mountedRequestItem).find('requestItem')).toBeTruthy();
  });
});
