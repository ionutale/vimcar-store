import React, { Component } from 'react';
import css from './App.css';
import ImageCard from './components/ImageCard/ImageCard';
import Toolbar from './components/Toolbar/Toolbar';
import * as items_service from './network/items-service';

class App extends Component {

  state = {
    items: [],
    itemsInCart: 0
  }
  
  async componentDidMount () {
    try {
      const res = await items_service.fetchDataFromServer()
      this.setState({items: [...res.json()]})
    } catch (error) {
      this.setState({items: []})
    }
  }

  addItemOnCart = () => {
    this.setState( ( prevState ) => {
      return { itemsInCart: prevState.itemsInCart+1 };
    });    
  }

  purchaseItems = () => {  
    items_service.purchaseAllItemsInCart(this.state.itemsInCart)
    .then ( () => {
      alert(`CONGRADULATION!!! \nYou just purchased ${this.state.itemsInCart} apple watches.\nYou will never be late again!!!`)
      this.setState({itemsInCart: 0})
    })
    .catch(error => {
      alert(`We are very sorry,\nyour order could not be completed because of ${error.mesage}`)
    })
  }


  generateCards = itemsArr => {
    let cards = itemsArr.map( (item, key) => 
    <ImageCard
      key={key}  
      imageSource={`./productImages/${item.images.normal}`}
      description={item.description}
      onClick={() => this.addItemOnCart()}
    />)
    return cards.length > 0 ? cards : "something when wrong, please try again"
  }

  render() {    
    return (
      <div className={css.App}>
        <Toolbar itemsInCart={this.state.itemsInCart} onClick={() => this.purchaseItems()}/>
        <section className={css.ItemsComponent} >
          {this.generateCards(this.state.items)}
        </section>
      </div>
    );
  }
}

export default App;
