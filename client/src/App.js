import React from 'react';
import FormikUserForm from "./components/Form"
import GetData from "./components/DataRetrieval"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-header">User Form</div>
     <FormikUserForm />
     <GetData />
    </div>
  );
}

export default App;
