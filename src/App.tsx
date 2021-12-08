import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './context/AppStateContext';

import Routes from './router';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes />
      </Router>
    </AppProvider>
  );
}

export default App;
