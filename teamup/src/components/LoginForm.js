import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

function LoginForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [sig_gender, setSigGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [profileImage, setProfileImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., submit data to backend)
        console.log('Form submitted:', { name, age, gender, email, password, additionalInfo });
        // 3. Pass data as state when navigating
        // history.push('/games', { name, age, gender, email, password, additionalInfo });
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
    const navigate = useNavigate();
    // const data = { name: 'John', age: 30 };

    function handleClick() {
        navigate("/login",
        {
            state: { name: name, age: age, gender: gender, email: email, password: password, additionalInfo: additionalInfo}
        });
    }

    async function callBack(){

        const data = {
            email: email,
            name: name,
            additionalInfo: additionalInfo,
            password: password,
            age: age,
            gender: gender,
            otherG: sig_gender
        }
        try{

        
     const response  = await    fetch('https://matchupbackend.vercel.app/signup', {
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
            const data = await response.json();
            
            alert(data.message);
            navigate('/login', {
                state: {
                    name: name,
                    password: password,
                    age: age,
                    gender: gender,
                    email: email,
                    additionalInfo: additionalInfo,
                

                }
            });
        }
      
        
    }  catch(error){
            console.error('There was a problem with the fetch operation:', error);
        };        

    }
    

    return (
        <div>
            <NavBar isLoggedIn = {false}/>
           
        <div className="form-container" style={formContainerStyles}>
            <h1>Sign Up</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group" style={formGroupStyles}>
                    <label className="form-label" style={labelStyles}>Name:</label >
                    <input className="form-input"  type="text" value={name} onChange={(e) => setName(e.target.value)} style={{...inputStyles, marginLeft: '58px'}}placeholder= "Enter your name" required />
                </div>
                <div className="form-group" style={formGroupStyles}>
                    <label className="form-label" style={labelStyles}>Age:</label>
                    <input className="form-input"  type="number" value={age} onChange={(e) => setAge(e.target.value)} style={{...inputStyles, marginLeft: '74px'}} placeholder= "Enter your age" required />
                </div>
                <div className="form-group" style={formGroupStyles}>
                    <label className="form-label" style={labelStyles}>Gender:</label>
                    <input className="form-input"  type="text" value={gender} onChange={(e) => setGender(e.target.value)} style={{...inputStyles, marginLeft: '42px'}} placeholder= "Enter your gender" required />
                </div>
                <div className="form-group" style={formGroupStyles}>
                    <label className="form-label" style={labelStyles}>Gender of player:</label>
                    <input className="form-input"  type="text" value={sig_gender} onChange={(e) => setSigGender(e.target.value)} style={{...inputStyles}} placeholder= "Enter gender of the player you want to match with" required/>
                </div>
                <div className="form-group" style={formGroupStyles}>
                    <label className="form-label" style={labelStyles}>Email:</label>
                    <input className="form-input"  type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{...inputStyles, marginLeft: '60px'}} placeholder= "Enter your email" required />
                </div>
                <div className="form-group" style={formGroupStyles}>
                    <label className="form-label" style={labelStyles}>Password:</label>
                    <input className="form-input"  type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{...inputStyles, marginLeft: '25px'}} placeholder= "Enter your password" required />
                </div>
                <div className="form-group" style={formGroupStyles}>
                    <label className="form-label" style={labelStyles}>Bio:</label>
                    <textarea className="form-input"  value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} style={{ ...inputStyles, marginLeft: '100 px' }} placeholder = "Enter your bio" required />
                </div>

                <div className="form-group" style={formGroupStyles}>
    
</div>


                {/* <Link to= "/login" state={{name: name, age: age, gender: gender, email: email, password: password, additionalInfo: additionalInfo}} onSubmit={callBack} style={{ textDecoration: 'none' }}> */}
                    <button className="form-button" style={buttonStyles} onClick={callBack} >Submit</button>
                {/* </Link> */}
            </form>
        </div>
        </div>
    );
}

export default LoginForm;
