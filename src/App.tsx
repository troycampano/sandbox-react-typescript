import React from 'react';
import logo from './logo.svg';
import './App.css';

type Props = {
  name: string;
}

function Welcome(props: Props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div className="App">
      Hello World
      <Welcome name="Troy" />
    </div>
  );
}

export default App;
