import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import reporter from '../lib/redux-reporter';
import session from '../lib/redux-session';
import thunk from '../lib/redux-thunk';
import ProfileForm from '../components/profile-form/profile-form';


configureEnzyme({ adapter: new Adapter() });

describe('Profile form testing', () => {
  const testState = {
    shoes: [],
  };

  test('testing ProfileForm', () => {
    const middleware = [thunk, reporter, session];
    const mockStore = configureStore(middleware);
    const mountedProfileForm = mount(<Provider store={mockStore(testState)}><ProfileForm/>
      </Provider>);
    expect((mountedProfileForm).find('contactFirstName')).toBeTruthy();
  });

  test('testing ProfileForm input field', () => {
    const middleware = [thunk, reporter, session];
    const mockStore = configureStore(middleware);
    const mountedProfileForm = mount(<Provider store={mockStore(testState)}><ProfileForm/>
    </Provider>);
    expect((mountedProfileForm).find('input')).toBeTruthy();
  });

  test('testing ProfileForm for organizationName', () => {
    const middleware = [thunk, reporter, session];
    const mockStore = configureStore(middleware);
    const mountedProfileForm = mount(<Provider store={mockStore(testState)}><ProfileForm/>
    </Provider>);
    expect((mountedProfileForm).find('organizationName')).toBeTruthy();
  });

  test('testing ProfileForm to render a button', () => {
    const middleware = [thunk, reporter, session];
    const mockStore = configureStore(middleware);
    const mountedProfileForm = mount(<Provider store={mockStore(testState)}><ProfileForm/>
    </Provider>);
    expect((mountedProfileForm).find('button')).toBeTruthy();
  });
});