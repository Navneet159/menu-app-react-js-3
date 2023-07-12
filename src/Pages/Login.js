import React, { useState } from 'react'
import { Button, Col, Container, Row, } from 'react-bootstrap';
import services from '../services/services';
import validator from 'validator';
import toastr from 'toastr';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faG } from '@fortawesome/free-solid-svg-icons'

export default function Login() {

    const [form, setFrom] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    const formSubmit = () => {

        var servicesObj = new services(); // creating object of class services

        // Email Validation  ---------------------

        if (validator.isEmpty(email)) {
            toastr.warning("Email cannot be Empty")
            return false
        }
        else if (!validator.isEmail(email)) {
            toastr.error("Enter Valid Email Address")
            // return false
            console.log("not valid email")
        }

        // Password Validation  ---------------------

        if (validator.isEmpty(password)) {
            toastr.warning("Password cannot be Empty")
            return false
        }
        else if (!validator.isStrongPassword(
            email,
            { minLength: 6, minLowercase: 0, minUppercase: 0, minNumbers: 0, minSymbols: 0 } //too Strong check OR some error
        )) {
            toastr.error("Enter a Strong Password")
            return false
        }

        // Sending data --------------------------

        var response = servicesObj.PostMethod( //services class methos
            "login", { "email": email, "password": password } // url and data arguments passed in class function

        ).then(
            (res) => {
                // console.log(res); // getting response data in console
                // console.log(res.data[0].name); // getting name of the person loggig in 
                toastr.success("Login Successful, Welcome " + res.data[0].name)
            }
        ).catch(
            (error) => {
                console.log(error.message);
                toastr.error(error.message);

            } // catching error
        )

        console.log(response);



    }







    const storeValue = (evnt, field) => {  //?? gogole (only way?)
        switch (field) {
            case "email":
                setEmail(evnt.target.value);
                break;
            case "password":
                setPassword(evnt.target.value);
                break;

            default:
                break;
        }
    }

    return (

        <Container className='container my-5'>
            <Row className='login-row'>
                <Col>
                    <div className='logo'>
                        <img className='img-fluid mt-3 rounded-2' src="/images/Group-9.png" height={100} width={100} alt="logo svg" />
                    </div>
                    <h3 className='mt-3'>Welcome!</h3>
                    <div className='sign-in-text'>Please Sign Into Your Account</div>
                    <div className='mt-3 '>
                        <label className='text-start div-input'> phone / email
                            <div><input type='text' value={email} onChange={(event) => { storeValue(event, "email") }} /></div>
                        </label>
                    </div>
                    <div className='mt-3'>
                        <label className='text-start div-input'> password
                            <div> <input type='password' value={password} onChange={(event) => { storeValue(event, "password") }} /></div>
                        </label>
                    </div>
                    <div className='recover-text'>Recover Password</div>
                    <div className='mt-5'>
                        <Button className='sign-button' onClick={formSubmit}>Sign In</Button>
                    </div>
                    {/* <div className='mt-2 '>
                        <Button className='sign-button-google'> <FontAwesomeIcon icon={faG} /><span className='ps-2'>Sign in with Google</span> </Button>
                    </div> */}

                    <div className='mt-5 not-reg-text'>
                        If not registered yet <span className='not-reg-text-inside' >Create an account</span>
                    </div>
                </Col>
            </Row>
        </Container >

    )
}

