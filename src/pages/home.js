import React from 'react'
import '../App.css';
import {Link} from "react-router-dom";

export default function home() {

    return (
        <div className='Button'>
            <Link to ="/admin"> 
                <h1>Admin</h1>
            </Link>
            <Link to ="/store"> 
                <h1>Store</h1>
            </Link>
            <Link to ="/manufacture"> 
                <h1>Manufacturer</h1>
            </Link>
          
        </div>
    )
}
