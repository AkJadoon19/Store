import React from 'react'
import {Link} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function store() {
    return (
        <div>
            <h1>
            <Link to ="/login"> 
                <h1>Manager</h1>
            </Link>
            <Link to ="/retailer-login"> 
                <h1>Retailer</h1>
            </Link>

            <Link to ="/">
                <IoIosArrowBack> Back</IoIosArrowBack>
            </Link>
          
            </h1>
        </div>
    )
}
