import React from 'react';
import {
  View,
  Text, 
  StyleSheet,
} from 'react-native';


import logo from './logo.svg';
import './App.css';

const NewApp = () => {
  return (
  <View>
    <Text>KeyDrop</Text>
    <View>
      <Text style={style.tap}>Log In</Text>
    </View>
  </View>

  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jessica is so good at coding
        </p>
        <a
          className="App-link" 
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
