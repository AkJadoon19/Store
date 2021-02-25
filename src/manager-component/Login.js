import React from 'react'
import {useHistory} from "react-router-dom"
import {Link} from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack} from "react-icons/io";

export default function Login() {

    const history = useHistory();

    //state values
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [username,setUsername] = React.useState('default');
    const [isMember,setIsMember] = React.useState(true);

    let isEmpty = !email || !password || !username;

    const toggleMember = () => {
        setIsMember((prevMember)=> {
            let isMember = !prevMember
            isMember?setUsername('default'):setUsername('')
            return isMember;
        });
    }

    const handleSubmit = async e => {
        //alert
        e.preventDefault();
        let response;
        if(isMember){
            //response = await loginUser
        }
        else{
            //response = await registerUser
        }

        if(response){
            //

        }else{
            //show alert
        }
    }

    return (
        <section className="form-section">
            <h2 className="section-title">
                {
                    isMember ? "sign in" : "register"
                }
            </h2>
            <form className="login-form">

                {/*single input */}
                <div className="form-control"> 
                    <label htmlFor="email"> Email </label>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>

                {/*single input */}
                <div className="form-control"> 
                    <label htmlFor="password"> Password </label>
                    <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                </div>

                
                {/*single input */}
                {!isMember && <div className="form-control"> 
                    <label htmlFor="username"> Username </label>
                    <input type="username" id="username" value={username} onChange={e => setUsername(e.target.value)}></input>
                </div>
                }

                {/* empty form field */}
                {isEmpty && (<p className="form-empty">Please fill out all form fields</p>)}

                {/*submit button */}
                {!isEmpty && <button type="submit" className="btn 
                btn-block btn-primary" onClick={handleSubmit}> Submit</button>}

                {/*register link*/}
                <p className="register-link">
                    {isMember?"Need to register ":"already a member"}
                    <button type="button" onClick={toggleMember}> click here</button>
                </p>
                
            </form>
            <Link to ="/store">
          
                <IoIosArrowBack > Back</IoIosArrowBack>

             </Link>

            <Link to ="/manager">
                <IoIosArrowForward> Back </IoIosArrowForward>
            </Link>        

        </section>
    )
}
