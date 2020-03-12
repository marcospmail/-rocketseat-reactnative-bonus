import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import App from '~/App';

import store from '~/store';

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
