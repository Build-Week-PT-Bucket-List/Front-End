import React from 'react';
import AddItem from './components/AddItemForm';
import BucketUpdate from'./components/BucketUpdate';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Create your Bucket List</h1>
      <AddItem />
      <BucketUpdate />
    </div>
  );
}

export default App;
