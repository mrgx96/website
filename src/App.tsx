import './styles.css';
import Header from './Header';
import Body from './Body';
import React from 'react';
import Footer from './Footer'

export default function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Body />
        <Footer />
      </div>
    </div>
  );
}
