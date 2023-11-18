import "./Login.scss";
import React, { forwardRef, useImperativeHandle, useState } from 'react';
const Login = forwardRef((props, ref) => {
    const [isModalVisible, setModalVisible] = useState(false);

    // Hàm để hiển thị modal
    const show = () => {
        setModalVisible(true);
    };

    // Hàm để ẩn modal
    const hide = () => {
        setModalVisible(false);
    };

    // Thực hiện sử dụng hàm show và hide từ bên ngoài
    useImperativeHandle(ref, () => ({
        show,
        hide,
    }));
    return (
        <>
            {/* Modal */}
            <div className={`modal fade ${isModalVisible ? 'show' : ''}`} id="LoginModal" tabIndex="-1" aria-labelledby="LoginModalLabel" aria-hidden={!isModalVisible}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="d-flex justify-content-end"><button type="button" className="btn-close" data-bs-dismiss="modal"  aria-label="Close"></button></div>
                                <div className="container">
                                    <div className="row px-3 px-sm-0">
                                        <div className="content-left col-12 d-none col-sm-5 d-sm-block">
                                            <div className="brand">
                                                Sign Up
                                            </div>
                                            <div className="detail">
                                                This is my project using bootstrap 5
                                            </div>
                                        </div>
                                        <div className="content-right col-sm-7 col-12 d-flex flex-column gap-3 py-3">
                                            <div className="brand d-sm-none" >
                                                TonCD
                                            </div>
                                            <input
                                                type="username"
                                                className='form-control' 
                                                placeholder='Email address or phone numbers'
                                            
                                            />
                                            <input
                                                type="password"
                                                className='form-control'
                                                placeholder='Password'
                    
                                            />
                                            <button className='btn btn-outline-primary'>Login</button>
                                            <span className='text-center'>
                                                <a className='forgot-password' href='#'>
                                                    Forgot your password?
                                                </a>
                                            </span>
                                            <hr />
                                            <div className='text-center'>
                                                <button className='btn btn-outline-success'>
                                                    Create New Account
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    );
});

export default Login;
