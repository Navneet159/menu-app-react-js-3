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

        // let formValues = [];
        // formValues.push({ "email": email, "password": password });
        // setFrom([...formValues, formValues]);
        // console.log(form);
        if (!validator.isEmail(email)) {
            toastr.error("Email is Invalid")
            return false
        }



        var servicesObj = new services; //?? gogole
        // if(email){

        // }
        var response = servicesObj.PostMethod("register.php", { "email": email, "password": password }).then((res) => {  //?? gogole
            console.log(res);
        });

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

        <Container className='container'>
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

