import React, { useState } from 'react';
import NavBar from './NavBar';
import { useEffect } from 'react';

function AboutUs() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            setIsLoggedIn(true); 
          
        } 
    }, []);

    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn} />
        <div style={makeBig}>
            <h1 className="fadeIn" style={badasa}>About Us</h1>
            <p>Welcome to MatchUp, where the exciting worlds of gaming and romance merge to forge unparalleled connections. At MatchUp, we're convinced that the strongest bonds are formed through shared passions and experiences. That's why we've crafted an innovative online dating platform that utilizes the magic of gaming to unite people. Our adventure started with a vision: to revolutionize the online dating landscape by integrating gaming elements. We observed that traditional dating platforms often feel tedious and impersonal. Our goal was to introduce something more vibrant—a space where connections are discovered and nurtured in a dynamic, engaging, and fun way. Your MatchUp journey begins by creating a profile that highlights not just your physical appearance and basic information but, more importantly, your gaming interests, favorite genres, and proficiency. This platform is about more than just finding a date; it's about connecting with someone who shares your enthusiasm for gaming, whether it be adventure, strategy, or any other genre you love. The cornerstone of MatchUp is our unique game-based matchmaking engine. By engaging in multiplayer games and quizzes that align with your interests, you showcase your personality, preferences, and gaming style. Our algorithm then matches you with individuals who share your gaming passions and disposition, making every match a potential beginning of a beautiful story. After matching, the excitement continues with exclusive games designed for two, providing the perfect icebreaker and fostering meaningful interactions. Beyond gaming, MatchUp offers various ways to communicate, including messaging, emojis, and voice notes, enabling you to build a genuine connection with ease. At MatchUp, safety and respect are paramount. We've implemented extensive privacy and safety features to ensure a respectful and secure environment where connections can thrive worry-free. MatchUp is more than a dating site; it's a community. With badges, achievements, community events, and tournaments, we cultivate a lively culture of participation, creativity, and feedback. Our dedication to regular updates and listening to user feedback means MatchUp continually evolves to meet the desires of its community. Discover MatchUp, where love is not just a game but a journey of connection. Let the games lead you to your perfect match. Welcome to where every match is a new beginning!</p>
        </div>
        </div>
    );
}

const makeBig = {
    height: '58.6vh',
    display: 'flex', justifyContent: 'top', alignItems: 'center',
    flexDirection: 'column',
    padding: '33.5px',
    backgroundColor: '#F3E8E2',
}

const badasa = {
    fontSize: '50px',
    textAlign: 'top',
    color: 'black',
}

export default AboutUs;
