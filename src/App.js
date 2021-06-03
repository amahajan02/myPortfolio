import React from 'react';
import './App.scss';
import Landing from './components/Landing/Landing';
import Toolbar from './components/Navigation/Toolbar';
import Main from './components/Main/Main';

function App() {

  return (
    <React.Fragment>
      <Landing />
      <Toolbar />
      <Main />
    </React.Fragment>
  );
}

export default App;
