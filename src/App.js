import React from 'react';
import './App.css';
import Dashboard from '../src/Components/Dashbaord/Dashboard'
import Form from '../src/Components/Form/Form'
import Header from '../src/Components/Header/Header'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        {routes}
      </div>
    </div>
  );
}

export default App;
