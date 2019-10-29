import React, { Component } from 'react'
import SHOP_DATA from './shop.data'
import PreviewCollection from '../PreviewCollection/PreviewCollection.component'

class Shop extends Component {
  constructor(){
    super();

    this.state = {
      shopData: SHOP_DATA
    }
  }

  render() {
    // console.log('shop data on render', this.state.shopData)
    return (
      <div className="shop-page">
        {this.state.shopData.map(({id, ...otherCollectionProps}) => {
          return <PreviewCollection key={id} id={id} {...otherCollectionProps}/>
        })}
      </div>
    )
  }
}

export default Shop