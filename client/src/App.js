import React from 'react';
import FormikUserForm from "./components/Form"
import GetData from "./components/DataRetrieval"
import './App.css';

function App() {
  return (
    <div className="App">
      <span className="app-header">User Form</span>
     <FormikUserForm />
     <GetData />
    </div>
  );
}

export default App;
