import React, { Component } from 'react';
import ProductInfo from '../plist.json';
import Product from './product'



class Products extends Component {


  render() {
    return (
      

      
        <div className="container">
          <div className="row ">
          {ProductInfo.map(postDetail => <Product key={postDetail.id} {...postDetail} />)}
          </div>
        </div>
      
    )
  }
}

export default Products


