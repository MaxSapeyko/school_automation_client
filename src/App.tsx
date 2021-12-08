import React from 'react';
import AppProvider from './context/AppStateContext';

import Routes from './router';

function App() {
  return (
    <AppProvider >
      <Routes />
    </AppProvider>
  );
}

export default App;
