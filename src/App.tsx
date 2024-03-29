import '../public/styles.css';
import Container from './Container';
import Header from './Header';
import Body from './Body';
import React from 'react';

export default function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Body />
      </div>
    </div>
  );
}
