import React from 'react'
import { Button, Col, Container, Row, } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faG } from '@fortawesome/free-solid-svg-icons'

export default function ForgetPassword() {
    return (

        <Container className='container'>
            <Row className='login-row'>
                <Col>
                    <div className='logo'>
                        <img className='img-fluid mt-3 rounded-2' src="/images/logo-2.png" height={100} width={100} alt="logo svg" />
                    </div>
                    <h3 className='mt-3'>Welcome!</h3>
                    <div className='sign-in-text'>Please Sign Into Your Account</div>

                    <div className='mt-3'>
                        <label className='text-start div-input'> Email
                            <div> <input type='text' /></div>
                        </label>
                    </div>

                    <div className='recover-text'>Recover Password</div>
                    <div className='mt-5'>
                        <Button className='sign-button' >Continue</Button>
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

