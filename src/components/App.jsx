import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';

import UserRoutes from './UserRoutes';

import { store, persistedStore } from '../redux/store';
import { Provider } from 'react-redux';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <BrowserRouter className="App" basename="/react-redux-shop">
          <UserRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
