import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import './App.css';
import Data from './assets/data.json';
import SelectedBeast from './SelectedBeast'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: Data,
      displayModal: false,
      favoriteBeast: {},
    }
  }

  displayAsModal = (index) => {
    console.log(index);
    this.setState ({favoriteBeast: this.state.newData[index], displayModal: true});
  }
  
handleClose =() => {
  this.setState({displayModal: false});
}
  
  render () {
    return (
      <div className="App">
          <header>
          <Header />
          <Footer />
          <Main
          cards={this.state.displayModal}
          displayModal={this.displayAsModal}
          />
          <SelectedBeast
          show={this.state.displayModal}
          handleClose={this.handleClose}
          favoriteBeast={this.state.favoriteBeast}
          />
          <Footer />
          </header>
      </div>
    );
  }
}
export default App;
