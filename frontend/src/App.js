import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from "./Screen/ProductScreen";
import CartScreen from "./Screen/cartScreen";
import LoginScreen from "./Screen/LoginScreen";
import RegisterScreen from "./Screen/registerScreen";
import ProfileScreen from "./Screen/profileScreen";
import ShippingScreen from "./Screen/shippingScreen";
import PaymentScreen from "./Screen/PaymentScreen";
import PlaceOrderScreen from "./Screen/PlaceOrderScreen";
import OrderScreen from "./Screen/orderScreen";
import UserListscreen from "./Screen/UserListScreen";
import UserEditScreen from "./Screen/UserEditScreen";
import ProductListScreen from "./Screen/ProductListScreen";
import productEditScreen from "./Screen/ProductEditScreen";
import OrderListScreen from "./Screen/OrderListScreen";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="m-4">
          <Container>
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} exact />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/admin/userlist" component={UserListscreen} />
            <Route path="/admin/user/:id/edit" component={UserEditScreen} />
            <Route path="/admin/productlist" component={ProductListScreen} />
            <Route
              path="/admin/product/:id/edit"
              component={productEditScreen}
            />
            <Route path="/admin/orderlist" component={OrderListScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
