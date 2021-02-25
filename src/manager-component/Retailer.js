import React from 'react'
import {useHistory} from "react-router-dom"
import {Link} from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack} from "react-icons/io";

export default function Retailer() {

    const history = useHistory();

    const [text,setText] = React.useState('');
    const [number,setNumber] = React.useState('');
    const [date,setDate] = React.useState('');

    let isEmpty = !text || !number || !date;

    const handleSubmit = async e => {
        //alert
        e.preventDefault();
        let response;

        if(response){
            //

        }else{
            //show alert
        }
    }




    return (
        <section className="form-section">
            
            <form className="login-form">

                {/*single input */}
                <div className="form-control"> 
                    <label htmlFor="text"> Product-Name </label>
                    <input type="text" id="text" value={text} onChange={e => setText(e.target.value)}></input>
                </div>

                {/*single input */}
                <div className="form-control"> 
                    <label htmlFor="number"> Product-Quantity </label>
                    <input type="number" id="number" value={number} onChange={e => setNumber(e.target.value)}></input>
                </div>

                

                     {/*single input */}
                <div className="form-control"> 
                    <label htmlFor="date"> Product-ID </label>
                    <input type="date" id="date" value={number} onChange={e => setDate(e.target.value)}></input>
                </div>

                {/* empty form field */}
                {isEmpty && (<p className="form-empty">Please fill out all form fields</p>)}

                {/*submit button */}
                {!isEmpty && <button type="submit" className="btn 
                btn-block btn-primary" onClick={handleSubmit}> Submit</button>}


            </form>

            <Link to ="/retailer-login">
          
                <IoIosArrowBack > Back</IoIosArrowBack>

             </Link>

            
            
        </section>
    )
}
