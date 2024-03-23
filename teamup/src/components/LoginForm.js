import React, { useState } from 'react';

function LoginForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., submit data to backend)
        console.log('Form submitted:', { name, age, gender, email, password, additionalInfo });
    };

    return (
        <div className="form-container" style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
            <h2>Sign Up</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <label className="form-label" style={{ fontSize: '1.2rem', margin: '10px' }}>Name:</label>
                    <input className="form-input" type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '5px', margin: '5px 0' }} />
                </div>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <label className="form-label" style={{ fontSize: '1.2rem', margin: '10px' }}>Age:</label>
                    <input className="form-input" type="number" value={age} onChange={(e) => setAge(e.target.value)} style={{ width: '100%', padding: '5px', margin: '5px 0' }} />
                </div>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <label className="form-label" style={{ fontSize: '1.2rem', margin: '10px' }}>Gender:</label>
                    <input className="form-input" type="text" value={gender} onChange={(e) => setGender(e.target.value)} style={{ width: '100%', padding: '5px', margin: '5px 0' }} />
                </div>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <label className="form-label" style={{ fontSize: '1.2rem', margin: '10px' }}>Email:</label>
                    <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '5px', margin: '5px 0' }} />
                </div>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <label className="form-label" style={{ fontSize: '1.2rem', margin: '10px' }}>Password:</label>
                    <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '5px', margin: '5px 0' }} />
                </div>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <label className="form-label" style={{ fontSize: '1.2rem', margin: '10px' }}>Additional Info:</label>
                    <textarea className="form-input" value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} style={{ width: '100%', padding: '5px', margin: '5px 0' }} />
                </div>
                <button className="form-button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginForm;
