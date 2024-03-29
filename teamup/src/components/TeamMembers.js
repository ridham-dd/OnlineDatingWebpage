import React from 'react';
import Naysha from '../assets/Naysha.jpeg';
import Ridham from '../assets/ridham.jpeg';
import Santosh from '../assets/santosh.jpeg';
import Vansh from '../assets/Vansh.jpeg';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';

function MeetTheTeam() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            setIsLoggedIn(true); 
          
        } 
    }, []);

    const imgStyle = {
        width: '200px',
        height: '200px',
        marginBottom: '5px',
    };

    // Updated grid container style
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', // Creates 2 columns
        gap: '20px', // Space between items
        padding: '20px', // Padding around the grid
    };

    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn} />
        
        <div style={teamPageStyle}>
            <h1 className="fadeIn" style={titleStyle}>Meet the Team</h1>
            <h3 style = {{ textAlign: 'center', marginLeft: '200px', marginRight: '200px'}}>Behind every great project is an even greater team. Meet the creative minds behind MatchUp, each bringing their unique talents and passion for gaming and connection to the forefront.</h3>
            <div style={gridContainerStyle}>
                <div className="team-member" style={memberStyle}>
                    <img src={Naysha} alt="Naysha" style={imgStyle} />
                    <h2>Naysha Jain</h2>
                    <p style = {{ textAlign: 'justify'}}>Hello! I am Naysha Jain, a sophomore at Knox College. I am extremely inquisitive about the Universe and the founder of SPAACEWALK (an immersive astronomy community and learning platform). I love to express my thoughts and opinions through dance, writing works and art!
    I am curious about the natural science out there in the universe and passionate about the science created by man!</p>
    <hr></hr>
    </div>
                <div className="team-member" style={memberStyle}>
                    <img src={Ridham} alt="Ridham" style={imgStyle} />
                    <h2>Ridham Dholaria</h2>
                    <p style = {{ textAlign: 'justify'}}>Ridham is an accomplished individual whose journey through academia and professional experiences showcases a remarkable blend of leadership, technical prowess, and a commitment to community building. Currently serving as a Resident Assistant at Knox College in Galesburg, Illinois, Ridham has been instrumental in fostering an inclusive environment for first-year students. Through a combination of community-building events and personal connections, Ridham has ensured that all students feel welcomed and supported. </p>
                    <hr></hr>
                </div>

                <div className="team-member" style={memberStyle}>
                    <img src={Santosh} alt="Santosh" style={imgStyle} />
                    <h2>Santosh Pant</h2>
                    <p style = {{ textAlign: 'justify'}}>Greetings! Santosh Pant here, a Computer Science Student studying at Knox College with a passion for Android and Web Development. Alongside my love for coding, I enjoy sharing my knowledge and experiences through blogging. Whether it's tinkering with new technologies or honing my skills, I'm always eager to learn and grow in this ever-evolving field. Looking forward to connecting with others who share my interests and expanding my horizons!</p>
                    <hr></hr>
                </div>
                
                <div className="team-member" style={memberStyle}>
                <img src={Vansh} alt="Vansh" style={imgStyle} />
                    <h2>Vansh Chugh</h2>
                    <p style = {{ textAlign: 'justify'}}>Vansh Chugh is a driven and multi-talented individual whose passion for both data science and music shines through in his academic pursuits and personal endeavors. As a student at Knox College, Vansh is dedicated to achieving excellence in his chosen fields of study, aiming for a major in Data Science alongside his musical interests. With a strong academic foundation and a commitment to excellence, Vansh's goal of achieving a perfect 4.0 GPA in his classes is a testament to his determination and intellectual prowess. His ambition to excel academically positions him as a top performer, consistently striving for the highest standards of achievement.</p>
                    <hr></hr>
                </div>
            </div>
        </div>
        </div>
    );
}

const teamPageStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#F4F4F4',
}

const titleStyle = {
    fontSize: '40px',
    textAlign: 'center',
    color: 'black',
    marginBottom: '20px',
}

const memberStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
}

export default MeetTheTeam;
