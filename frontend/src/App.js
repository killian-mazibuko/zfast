import React from "react";
import data from "./data";
import Product from "./components/Product";
import { BrowserRoute, Route } from "react-router-dom";
import HomeScreen from "./screens/Home";
import ProductScreen from "./screens/Product";

function App() {
  return (
    <BrowserRoute>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              <img src={"images/logo.png"} alt="logo" />
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRoute>
  );
}

export default App;
