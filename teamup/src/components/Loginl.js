import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';




function Loginl() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State to toggle password visibility
    const navigate = useNavigate();
    
    const location = useLocation();
    // Check if name is blank or empty and set to "Default User" if it is
    const nameG = location.state.name;
    const age = location.state.age;
    const gender = location.state.gender;
    const email = location.state.email;
    const passwordG = location.state.password;
    const additionalInfo = location.state.additionalInfo;
    const isLoggedIn = true;

  

    const data = [ 
        {
            name: "Santosh",
            password: "780537"
        },
        {
            name: "xyz",
            password: "random"
        }
     ];

     function addData(){
        if(nameG.length>1 && passwordG.length>1){
            data.push({
                name: nameG,
                password: passwordG
            })
        }
    }

    addData();

function authenticate(){
    for (let i = 0; i < data.length; i++) {
        if (data[i].name === name && data[i].password === password) {
            alert('Success');
            navigate('/games', {
                state: {
                    name: nameG,
                    password: passwordG,
                    age: age,
                    gender: gender,
                    email: email,
                    additionalInfo: additionalInfo,
                    isLoggedIn: isLoggedIn

                }
            });
            return;
        } 
}   

    alert('Wrong password');
    // navigate('/');
    return;
}
    

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticate()
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const formContainerStyles = {
        width: '600px',
        margin: '0 auto',
        textAlign: 'center',
        backgroundColor: '#F3E8E2',
        padding: '20px',
        borderRadius: '10px',
        marginTop: '100px'
    };

    const formGroupStyles = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '20px',
        marginBottom: '10px'
    };

    const labelStyles = {
        fontSize: '20px',
        margin: '10px',
        padding: '5px',
        textAlign: 'left'
    };

    const inputStyles = {
        width: '100%',
        padding: '5px',
        margin: '5px 0',
        fontFamily: 'Arial'
    };

    const buttonStyles = {
        padding: '10px 20px',
        borderRadius: '10px',
        backgroundColor: '#D1510A',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
    };

    return (
        <div>
            <NavBar isLoggedIn={false} />
        <div className="form-container" style={formContainerStyles}>
            <h1>Welcome! Log In</h1>
            <form className="login-form">
                <div className="form-group" style={formGroupStyles}>
                    <label className="form-label" style={labelStyles}>Name:</label>
                    <input
                        className="form-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{...inputStyles, marginLeft: '35px'}}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="form-group" style={formGroupStyles}>
                    <label className="form-label" style={labelStyles}>Password:</label>
                    <input
                        className="form-input"
                        type={isPasswordVisible ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{...inputStyles, marginRight: '10px', width: 'calc(100% - 60px)'}}
                        placeholder="Enter your password"
                        required
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        style={{
                            ...buttonStyles,
                            backgroundColor: '#6c757d',
                            padding: '5px 10px',
                            fontSize: '12px',
                            height: '40px',
                        }}
                    >
                        {isPasswordVisible ? 'Hide' : 'Show'}
                    </button>
                </div>
                <button type="submit" style={buttonStyles} onClick={handleSubmit}>Submit</button>
            </form>
        </div>
        </div>
    );
}

export default Loginl;