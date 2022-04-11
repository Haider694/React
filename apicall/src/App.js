

import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Switch } from "react-router-dom";
import ProductList from './components/ProdectList'
import Product from './components/Product'
import Cart from './components/Cart'



const App = () => {
  return (

    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={ProductList} />
        <Route path="/products/:id" exact component={Product} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </>


  )
}

export default App
