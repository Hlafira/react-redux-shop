import { BrowserRouter } from 'react-router-dom';

import UserRoutes from './UserRoutes';

import { store } from '../redux/store';
import { Provider } from 'react-redux';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/react-redux-shop">
        <UserRoutes />
      </BrowserRouter>
    </Provider>
  );
};
