import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
// import { browserHistory } from 'react-router';


import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
//import { createBrowserHistory } from 'history'

export default class manager extends Component {
    // onNavigateHome() {
    //      browserHistory.push("/")
    // onClick={this.onNavigateHome}
    //     }

    onChange = (e) => {
        this.props.history.push(`/${e.target.value}`);
      }
    

    render() {
        return (
                <div>
                   
            <select onChange={this.onChange}>
                 
                 <option value="" > * Product-list * </option>
                 <option value="Viewproduct" > View Product </option>
                 <option value="Insertproduct" > Insert Product </option>
                 <option value="Deleteproduct"> Delete Product </option>
                 <option value="Updateproduct"> Update Product </option> 
             </select>

                
             <select onChange={this.onChange}>
                 <option value="" >  * Sales-data list * </option>
                 <option value="Viewsale" > View Sales-data </option>
                 <option value="Insertsale" > Insert Sales-data </option>
                 <option value="Updatesale"> Update Sales-data </option>
                 <option value="Deletesale"> Delete Sales-data </option> 
             </select>

             <select onChange={this.onChange}>
                 <option value="" > * Retailer list * </option>
                 <option value="Addretailer" > Add Retailer </option>
                 <option value="Removeretailer" > Remove Retailer </option>
             </select>

             <h3>
             <Link to ="/login">
                <IoIosArrowBack size="2%"> Back</IoIosArrowBack>
             </Link>
             </h3>
                
            </div>
        )
    }
}


// import React from 'react'
// import {BrowserRouter, Link} from 'react-router-dom';
// import { IoIosArrowBack } from "react-icons/io";
// import { brwoserHistory} from 'react-router';

// export default function manager() {
//     onNavigateHome() {
//         BrowserRouter.push("/home")

//     }
    
//     return (
//         <div>
//             <select>
//                 <option value="view-products" onClick={this.onNavigateHome}> View Product </option>
//                 <option value="insert-products" > Insert Product </option>
//                 <option value="update-products"> Delete Product </option>
//                 <option value="delete-products"> Update Product </option> 
//             </select>

                
//             <select>
//                 <option value="view-sale-data" > View Sales-data </option>
//                 <option value="insert-sale-data" > Insert Sales-data </option>
//                 <option value="update-sale-data"> Delete Sales-data </option>
//                 <option value="delete-sale-data"> Update Sales-data </option> 
//             </select>

//             <select>
//                 <option value="add-retailer" > Add Retailer </option>
//                 <option value="remove-retailer" > Remove Retailer </option>
//             </select>

//             <h3>
//             <Link to ="/login">
          
//                 <IoIosArrowBack size="2%"> Back</IoIosArrowBack>
    
//             </Link>
//             </h3>
//         </div>
//     )
// }
