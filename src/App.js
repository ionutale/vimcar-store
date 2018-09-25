import React, { Component } from 'react';
import css from './App.css';
import ImageCard from './components/ImageCard/ImageCard';
import Toolbar from './components/Toolbar/Toolbar';
import * as items_service from './network/items-service';

class App extends Component {

  state = {
    items: []
  }
  async componentDidMount () {
    try {
      const res = await items_service.fetchDataFromServer()
      this.setState({items: [...res.json()]})
    } catch (error) {
      this.setState({items: []})
    }
  }

  generateCards = itemsArr => {
    let cards = itemsArr.map( (item, key) => <ImageCard  
    imageSource={`./productImages/${item.images.normal}`}
    description={item.description}
    />)
    return cards.length > 0 ? cards : "something when wrong, please try again"
  }

  render() {
    return (
      <div className={css.App}>
        <Toolbar />
        <section className={css.ItemsComponent} >
          {this.generateCards(this.state.items)}
        </section>
      </div>
    );
  }
}

export default App;
