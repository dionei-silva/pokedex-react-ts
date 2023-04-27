import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { ThemeProvider } from '@mui/material';
import defaultTheme from './config/theme/default';
import AppRoutes from './routes/AppRoutes';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <AppRoutes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
