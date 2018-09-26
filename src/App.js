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
    .then ( res => {
      console.log(res.status);
      
      this.purchaseResponseHandler(res)
    })
    .catch(error => {
      // the catch looks like it will never happen because the promise nevej rejects
      // but i leave it here code stability and future updates ( that will never happen because is a test)
      alert(`We are very sorry,\nyour order could not be completed because of ${error.mesage}`)
    })
  }

  purchaseResponseHandler = res => {
    if (res.status === 204) {
      alert(`CONGRADULATION!!! \nYou just purchased ${this.state.itemsInCart} apple watches.\nYou will never be late again!!!`)
      this.setState({itemsInCart: 0})
    } else if(res.status === 418) {
      alert(`418 I'm a teapot :D`)
    } else if(res.status === 500) {
      alert(`An internal sever error ocured, please try again.\nIf the error persists, please contact us!`)
    } else {
      alert(`I have no idea what happen.\nHere is what the server explanation is: ${res.json()}`)
    }
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
