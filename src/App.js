import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ViewOne from './components/View/ViewOne';
import ViewTwo from './components/View/ViewTwo';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <ViewOne />
      <h1 className='shopTitle' style={{textAlign: 'center', marginTop: '-3em'}}>Shop Records!</h1>
      <ViewTwo />
    </div>
  );
}

export default App;
