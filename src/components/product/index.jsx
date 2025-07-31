import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping, faClock } from "@fortawesome/free-solid-svg-icons";
import { biryanis, burgers, pizzas, thalis } from '../../utils/data';
import PizzaCard from '../pizzacard';


const Product = ({ cart, setCart }) => {
  

  const addToCart = (item) => {
    const exists = cart.find(cartItem => cartItem.id === item.id);
    if (exists) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const increment = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrement = (id) => {
    setCart(cart
      .map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
      .filter(item => item.quantity > 0)
    );
  };

  const handleDelete = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  }
  return (
    <section className="my-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8 order-1 order-md-0 bg-white p-0">
            <div className="menuBox text-white bg-primary py-3 text-center">
              <h1>Our Menu</h1>
              <p>Authentic Japanese cuisine made with the finest ingredients</p>
            </div>
            <div className="productBox p-3">
              <h1 className="product_heading py-3">Best Pizzas</h1>
              <div className="row">
                {pizzas.map((pizza) => (
                  <div className="col-md-6" key={pizza.id}>
                    <PizzaCard
                      title={pizza.title}
                      body={pizza.body}
                      price={pizza.price}
                      img={pizza.imgSrc}
                      addtocart={() => addToCart(pizza)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="productBox p-3">
              <h1 className="product_heading py-3">North Indian Thali</h1>
              <div className="row">
                {thalis.map((thali) => (
                  <div className="col-md-6" key={thali.id}>
                    <PizzaCard
                      title={thali.title}
                      body={thali.body}
                      price={thali.price}
                      img={thali.imgSrc}
                      addtocart={() => addToCart(thali)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="productBox p-3">
              <h1 className="product_heading py-3">Best Indian Biryani</h1>
              <div className="row">
                {biryanis.map((biryani) => (
                  <div className="col-md-6" key={biryani.id}>
                    <PizzaCard
                      title={biryani.title}
                      body={biryani.body}
                      price={biryani.price}
                      img={biryani.imgSrc}
                      addtocart={() => addToCart(biryani)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="productBox p-3">
              <h1 className="product_heading py-3">Best Burgers</h1>
              <div className="row">
                {burgers.map((burger) => (
                  <div className="col-md-6" key={burger.id}>
                    <PizzaCard
                      title={burger.title}
                      body={burger.body}
                      price={burger.price}
                      img={burger.imgSrc}
                      addtocart={() => addToCart(burger)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-4 order-0 order-md-1 position-sticky top-0 start-0">
            <div className="mainBox bg-white">
              <div className="cartHeading text-white text-center py-3 position-sticky top-0 start-0">
                <FontAwesomeIcon icon={faCartShopping} color="white" size="2x" className="px-1" />
                <h3 className="d-inline">Your Order</h3>
                <p>Review and checkout your items</p>
              </div>
              <div className="cartBox bg-white sticky-cart pb-3">
                <div className="timeBox py-3 px-4 m-3">
                  <FontAwesomeIcon icon={faClock} color="#2c3e50" />
                  <span>Estimated delivery: 30-45 minutes</span>
                </div>
                {cart.length > 0 ? (
                  <>
                    {cart.map(item => (
                      <div key={item.id} className="d-flex justify-content-between align-items-center p-3 border-bottom">
                        <div>
                          <strong>{item.title}</strong>
                          <p className="mb-0 text-muted">Rs. {item.price}</p>
                        </div>
                        <div>
                          <button onClick={() => decrement(item.id)} className="btn btn-sm btn-outline-secondary">-</button>
                          <span className="mx-2">{item.quantity}</span>
                          <button onClick={() => increment(item.id)} className="btn btn-sm btn-outline-secondary">+</button>
                          <button onClick={() => handleDelete(item.id)} className="btn btn-sm btn-outline-danger ms-2">Delete</button>
                        </div>
                      </div>
                    ))}
                    <div className="text-right p-3">
                      <strong>Total: Rs. {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</strong>
                    </div>
                  </>
                ) : (
                  <p className="text-center">Your cart is empty</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;