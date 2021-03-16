import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header>
          <Header />
          <Main />
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
