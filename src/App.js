import React, { Component } from 'react';
import css from './App.css';
import ImageCard from './components/ImageCard/ImageCard';

class App extends Component {
  render() {
    return (
      <div className={css.App}>
        <ImageCard />
      </div>
    );
  }
}

export default App;
