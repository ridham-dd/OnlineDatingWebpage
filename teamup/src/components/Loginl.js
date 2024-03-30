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
    

  

async function authenticate(){
    const data = {
        email: name,      
        password: password,
    }

    try{
        const response  = await    fetch('https://matchupbackend.vercel.app/login', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify(data)
           })
           if (!response.ok) {
               const data = await response.json();         
               alert(data.message);
               return;
           } else{
            const { token } = await response.json();           
            //    alert(token);
               localStorage.setItem('jwt', token);
            // console.log(token);
               navigate('/');
           }

        
        }  catch(error){
            console.error('There was a problem with the fetch operation:', error);
        };        

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