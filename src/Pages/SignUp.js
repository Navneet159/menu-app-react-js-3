import React from 'react'
import { Button, Col, Container, Row, } from 'react-bootstrap';
import { useState } from 'react';
import toastr from 'toastr';
import validator from 'validator';
import services from '../services/services';
// import { text } from '@fortawesome/fontawesome-svg-core';


export default function SignUp() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [role, setRole] = useState('')
    const [phone, setPhone] = useState('')
    const [conPass, setConPass] = useState('')

    // var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

    // getting the values from the USER -------------------

    const handelOnChangeName = (event) => {
        // console.log("onchange") // working
        // console.log(event.target.value) // capturing value from input
        setName(event.target.value) // updating name value using setName()
        console.log(name) // working
    }

    // const handelOnChangeRole = (event) => {
    //     // console.log("onchange") // working
    //     // console.log(event.target.value) // capturing value from input
    //     setRole(event.target.value) // updating name value using setName()
    //     console.log(role) // working
    // }

    const handelOnChangePhone = (event) => {

        setPhone(event.target.value) // updating email value using setName()
        console.log(phone) // working
    }

    const handelOnChangeEmail = (event) => {

        setEmail(event.target.value) // updating email value using setName()
        console.log(email) // working
    }
    const handelOnChangePass = (event) => {

        setPassword(event.target.value) // updating password value using setName()
        console.log(password) // working
    }
    const handelOnChangeConPass = (event) => {

        setConPass(event.target.value) // updating password value using setName()
        console.log(password) // working
    }




    // Posting data on button submit -------------------


    const handelOnClick = () => {

        console.log("clicked on sign in button");


        // Validations for fields ------------------------

        // if ((name && phone && email && password && conPass) === '') {  // isEmpty check for all fields
        //     toastr.warning("FILDS CANNOT BE EMPTY")
        // }

        // for name ---------------------------
        if (name === '') {
            toastr.warning("Name cannot be empty")
        }
        // else if (!regName.test(name)) { // name = string validdation
        //     console.log(text)
        //     toastr.error("Enter a valid name")
        // }


        // for phone ---------------------------

        if (validator.isEmpty(phone)) {
            toastr.warning("Phone cannot be empty")
        } else
            if (!validator.isMobilePhone(phone)) {
                toastr.error("Enter a Valid Phone No.")
            }

        // for email ---------------------------

        if (validator.isEmpty(email)) {
            toastr.warning("Email cannot be empty")
        } else
            if (!validator.isEmail(email)) {
                toastr.error("Enter a Valid Email")
            }

        // for password ---------------------------

        if (validator.isEmpty(password)) {
            toastr.warning("Password cannot be empty")
        }
        else if (!validator.isStrongPassword(
            password, { minLength: 6, minLowercase: 0, minUppercase: 0, minNumbers: 0, minSymbols: 0 }  //too Strong check OR some error
        )) {
            toastr.error("Enter a Valid Password")
        }

        // for confirm password ---------------------------

        if (validator.isEmpty(conPass)) {
            toastr.warning("Confirm Password cannot be Eplty")
        } else if (!validator.isStrongPassword(
            conPass, { minLength: 6, minLowercase: 0, minUppercase: 0, minNumbers: 0, minSymbols: 0 } //too Strong check OR some error
        )) {
            toastr.error("Enter a Valid Confirm Password")
        } else if (password !== conPass) {
            toastr.warning("password and Confirm password Do not match")
        }



        // sending data to server ------------------------------------

        const serviceObject = new services()

        serviceObject.PostMethod("register", {
            name: name,
            role: "customer",
            phone: phone,
            email: email,
            password: password,
            password_confirmation: conPass

        }).then(
            (res) => { console.log(res) }
        ).catch(
            (error) => {
                console.log(error.message);
                toastr.error(error.message);
            }
        )
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
                        <label className='text-start div-input'> name
                            <div><input type='text' name='name' onChange={handelOnChangeName} /></div>
                        </label>
                    </div>
                    {/* <div className='mt-3 '>
                        <label className='text-start div-input'> role
                            <div><input type='text' name='role' onChange={handelOnChangeRole} /></div>
                        </label>
                    </div> */}
                    <div className='mt-3'>
                        <label className='text-start div-input'> Phone
                            <div> <input type='text' name='phone' onChange={handelOnChangePhone} /></div>
                        </label>
                    </div>
                    <div className='mt-3'>
                        <label className='text-start div-input'> Email
                            <div> <input type='text' name='email' onChange={handelOnChangeEmail} /></div>
                        </label>
                    </div>
                    <div className='mt-3'>
                        <label className='text-start div-input'> password
                            <div> <input type='password' name='password' onChange={handelOnChangePass} /></div>
                        </label>
                    </div>
                    <div className='mt-3'>
                        <label className='text-start div-input'> confirm password
                            <div> <input type='password' name='password_confirmation' onChange={handelOnChangeConPass} /></div>
                        </label>
                    </div>
                    <div className='recover-text'>Recover Password</div>
                    <div className='mt-5'>
                        <Button type='button' className='sign-button' onClick={handelOnClick} >Sign In</Button>
                    </div>
                    {/* <div className='mt-2 '>
                        <Button className='sign-button-google'> <FontAwesomeIcon icon={faG} /><span className='ps-2'>Sign in with Google</span> </Button>
                    </div> */}

                    {/* <div className='mt-5 not-reg-text'>
                        If not registered yet <span className='not-reg-text-inside' >Create an account</span>
                    </div> */}
                </Col>
            </Row>
        </Container >

    )
}



