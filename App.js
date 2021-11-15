import React, { Component, Fragment } from 'react'
import BaiTapEmoji from './src/Emoji'
import ProductShoes from './src/ShoesProductPage/Product'
import SocialNetwork from './src/SocialNetwork'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <ProductShoes />
      </Fragment>
    )
  }
}
