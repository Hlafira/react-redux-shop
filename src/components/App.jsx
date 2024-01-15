import { BrowserRouter } from 'react-router-dom';

import UserRoutes from './UserRoutes';

import { store } from '../redux/store';
import { Provider } from 'react-redux';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
