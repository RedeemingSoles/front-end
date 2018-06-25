import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import session from '../lib/redux-session';
import thunk from '../lib/redux-thunk';
import ProfileForm from '../components/profile-form/profile-form';

configureEnzyme({ adapter: new Adapter() });

describe('Profile form testing', () => {
  const testState = {
    organizationName: '',
    contactFirstName: '',
    contactLastName: '',
    title: '',
    phoneNumber: '',
    mailingAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  };

  describe('Default State', () => {
    test('testing ProfileForm', () => {
      const middleware = [thunk, session];
      const mockStore = configureStore(middleware);
      const mountedProfileForm = mount(<Provider store={mockStore(testState)}><ProfileForm/>
        </Provider>);
      expect((mountedProfileForm).find('contactFirstName')).toBeTruthy();
    });
  
    test('testing ProfileForm input field', () => {
      const middleware = [thunk, session];
      const mockStore = configureStore(middleware);
      const mountedProfileForm = mount(<Provider store={mockStore(testState)}><ProfileForm/>
      </Provider>);
      expect((mountedProfileForm).find('input')).toBeTruthy();
    });
  
    test('testing ProfileForm for organizationName', () => {
      const middleware = [thunk, session];
      const mockStore = configureStore(middleware);
      const mountedProfileForm = mount(<Provider store={mockStore(testState)}><ProfileForm/>
      </Provider>);
      expect((mountedProfileForm).find('organizationName')).toBeTruthy();
    });
  
    test('testing ProfileForm to render a button', () => {
      const middleware = [thunk, session];
      const mockStore = configureStore(middleware);
      const mountedProfileForm = mount(<Provider store={mockStore(testState)}><ProfileForm/>
      </Provider>);
      expect(mountedProfileForm.find('button')).toBeTruthy();
      expect(mountedProfileForm.find('button').length).toEqual(1);
    });
  });

  describe('State Changes', () => {
    test('testing state change of the Profile form.', () => {
      const mountedProfileForm = mount(<ProfileForm/>);

      const testEvent = {
        target: {
          name: 'organizationName',
          value: 'TestName',
        },
      };
      mountedProfileForm.find('input').first().simulate('change', testEvent);
      expect(mountedProfileForm.state().organizationName).toEqual('TestName');
    });
  });
  test('#handleValidation, should return validation error message for invalid phoneNumber input.', () => {
    const mountedProfileForm = mount(<ProfileForm/>);

    const testEvent = {
      target: {
        name: 'phoneNumber',
        value: '123',
      },
    };
    mountedProfileForm.find('input').first().simulate('change', testEvent);
    expect(mountedProfileForm.state().phoneNumberError).toEqual('Invalid phone number format.');
  });
  test('#handleValidation, should return null for phoneNumberError for a valid phoneNumber input.', () => {
    const mountedProfileForm = mount(<ProfileForm/>);

    const testEvent = {
      target: {
        name: 'phoneNumber',
        value: '(123) 456-7891',
      },
    };
    mountedProfileForm.find('input').first().simulate('change', testEvent);
    expect(mountedProfileForm.state().phoneNumberError).toBeNull();
  });
  test('#handleSubmit, should call onComplete().', () => {
    const mountedProfileForm = mount(<ProfileForm/>);
    mountedProfileForm.setProps({ onComplete: jest.fn() });
    mountedProfileForm.simulate('submit', { preventDefault: () => {} });
    expect(mountedProfileForm.props().onComplete).toHaveBeenCalled();
  });
});
