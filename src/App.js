//import logo from './logo.svg';
//import './App.css';

//dependencies
import React from 'react';
import ReactDOM from "react-dom";

// pages
import Home from "./pages/home";
import Admin from "./pages/admin";
import Store from "./pages/store";
import Manufacture from "./pages/manufacture";
import Error from "./pages/error";
import About from "./pages/about";

//store pages
import Manager from './manager-component/manager';
import Retailer from './manager-component/Retailer';
import Login from "./manager-component/Login";
import RetailerLogin from './manager-component/retailer-login';

// manager pages - Product
import InsertProduct from './manager-component/product-component/Insertproduct';
import ViewProduct from './manager-component/product-component/Viewproduct'
import UpdateProduct from './manager-component/product-component/Updateproduct'
import DeleteProduct from  './manager-component/product-component/Deleteproduct'

//manager pages - Sale data
import ViewSale from './manager-component/sale-component/Viewsale';
import InsertSale from './manager-component/sale-component/Insertsale';
import UpdateSale from './manager-component/sale-component/Updatesale';
import DeleteSale from './manager-component/sale-component/Deletesale';

//manager pages - Retailer
import AddRetailer from './manager-component/retailer-component/Addretailer';
import RemoveRetailer from './manager-component/retailer-component/Removeretailer';




import {Route, Switch} from 'react-router-dom';

import Navbar from './style-components/navbar';


function App() {
  return (
    <>
    <Navbar />
    <Switch>
      {/* Pages routes */}
      <Route exact path="/" component={Home}/>
      <Route exact path="/admin" component={Admin}/>
      <Route exact path="/store" component={Store}/>
      <Route exact path="/manufacture" component={Manufacture}/>
      <Route exact path="/about" component={About}/>

      {/* Store routes*/}
      <Route exact path="/manager" component={Manager}/>
      <Route exact path="/retailer" component={Retailer}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/Retailer-login" component={RetailerLogin}/>


      {/* Manager- Product routes */}
      <Route exact path="/Insertproduct" component={InsertProduct}/>
      <Route exact path="/Viewproduct" component={ViewProduct}/>
      <Route exact path="/Deleteproduct" component={DeleteProduct}/>
      <Route exact path="/Updateproduct" component={UpdateProduct}/>

      {/* Manager- Sale routes */}
      <Route exact path="/Insertsale" component={InsertSale}/>
      <Route exact path="/Viewsale" component={ViewSale}/>
      <Route exact path="/Deletesale" component={DeleteSale}/>
      <Route exact path="/Updatesale" component={UpdateSale}/>

      {/* Manager - Retailer routes */}
      <Route exact path="/Addretailer" component={AddRetailer}/>
      <Route exact path="/Removeretailer" component={RemoveRetailer}/>

      {/* Error route */}
      <Route component={Error}/>
      </Switch>  
    </>
  );
}

export default App;
