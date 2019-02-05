import React, { Component } from 'react';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

    }


    handleIncerement = () => {
        this.setState({
            count: this.state.count + 1
        });

    }

    handleDecrement = () => {
        if(this.state.count< 1){
            this.setState({
              count:0
            });
          }else {
            this.setState({
              count: this.state.count- 1
            });
          }
    }

    render() {
        const { name, image, price, description } = this.props;
       
  
      
        
        return (
            <div className="col-md-4 mt-auto">
                <img className="productpic" src={require(`./images/${image}`)} alt="Product" />
                <h2 className="display-6"> <a href="{url}">{name}</a></h2>
                <p className="h5 price">{price}</p>
                <p className="info">{description}</p>
                <div className="counter">
                    <button className="btn btn-info" onClick={this.handleIncerement}>+</button>
                    <div className="count">{this.state.count}</div>
                    
                    <button className="btn btn-info" onClick={this.handleDecrement}>-</button>
                </div>
            </div>
        );
    }
}

export default Product