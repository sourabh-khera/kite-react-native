import React from 'react';
import { Provider } from 'react-redux';
import store from './src/client/store';
import AppEntry from './src/client/appEntry';

const App = () => {
  return (
    <Provider store={store}>
      <AppEntry />
    </Provider>
  );
};

export default App;
