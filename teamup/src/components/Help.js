import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Help() {
    const [name, setName] = useState('');
    const [Dateofissue, setDateofissue] = useState('');
    const [Concern, setConcern] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            setIsLoggedIn(true); 
          
        } 
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., submit data to backend)
        console.log('Form submitted:', { name, Dateofissue,Concern });
        // 3. Pass data as state when navigating
        // history.push('/games', { name, Dateofissue, gender, email, password, Concern });
    };

    const formContainerStyles = {
        width: '600px',
        margin: '0 auto',
        textAlign: 'center',
        backgroundColor: '#F3E8E2',
        padding: '20px',
        borderRadius: '10px'
    };

    const formGroupStyles = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: '10px'
    };

    const labelStyles = {
        fontSize: '20px',
        margin: '10px',
        padding: '5px',
        textAlign: 'left' // Align labels to the left
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
            <NavBar isLoggedIn={isLoggedIn} />
        <div className="form-container" style={formContainerStyles}>
            <h1>Help</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group" style={formGroupStyles}>
                    <label className="form-label" style={labelStyles}>Name:</label>
                    <input className="form-input" type="text" value={name} onChange={(e) => setName(e.target.value)} style={{...inputStyles, marginLeft: '58px'}}placeholder= "Enter your name" />
                </div>
                <div className="form-group" style={formGroupStyles}>
                    <label className="form-label" style={labelStyles}>When did you face the issue?</label>
                    <input className="form-input" type="date" value={Dateofissue} onChange={(e) => setDateofissue(e.target.value)} style={{...inputStyles, marginLeft: '10px'}} placeholder= "Enter your age" />
                </div>
                <div className="form-group" style={formGroupStyles}>
                    <label className="form-label" style={labelStyles}>Concern:</label>
                    <textarea className="form-input" value={Concern} onChange={(e) => setConcern(e.target.value)} style={{ ...inputStyles, marginLeft: '100 px' }} placeholder = "Enter your concern"  />
                </div>
                <Link to="/games" style={{ textDecoration: 'none' }}>
                    <div className="form-button" style={buttonStyles}>Submit</div>
                </Link>
            </form>
        </div>
        </div>
    );
}

export default Help;
