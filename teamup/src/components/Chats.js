import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

const Chats = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("Mahesh");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Introduce loading state

    let initialMessages = {
        'Alice': [
            { text: `Hi,  how are you?`, timestamp: '2024-03-24 09:00', sender: 'Alice' },
            { text: 'What are you doing this weekend?', timestamp: '2024-03-24 09:01', sender: 'Alice' },
            { text: 'I might go hiking. You?', timestamp: '2024-03-24 09:10', sender: name },
            { text: 'Sounds fun! I have a family gathering.', timestamp: '2024-03-24 09:15', sender: 'Alice' }
        ],
        'Bob': [
            { text: 'Hello! Long time no see.', timestamp: '2024-03-24 10:00', sender: 'Bob' },
            { text: 'Hey! Yeah, it’s been a while.', timestamp: '2024-03-24 10:02', sender: name },
            { text: 'Let’s catch up soon.', timestamp: '2024-03-24 10:05', sender: 'Bob' }
        ],
        'Charlie': [
            { text: 'Hey, did you check out that new movie?', timestamp: '2024-03-24 11:00', sender: 'Charlie' },
            { text: 'Not yet, but I plan to this weekend.', timestamp: '2024-03-24 11:05', sender: name }
        ]
    };

    const [messages, setMessages] = useState(initialMessages);
    const [newMessage, setNewMessage] = useState('');
    const [currentUser, setCurrentUser] = useState('Alice');

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            setIsLoggedIn(true);
            getData(jwt);
        } else {
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        // Trigger re-render when 'name' state changes
        updateMessagesWithNewName();
    }, [name]);

    async function getData(jwt){
        try {
            const response  = await fetch('https://matchupbackend.vercel.app/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authentication': jwt
                }
            });
            if (!response.ok) {
                alert("Some issue with backend");
                return;
            } else {
                const data = await response.json();
                setName(data.data.name);
            }
        } catch(e) {
            alert("Internal Server Error, Try again");
            navigate('/');
        } finally {
            setIsLoading(false); // Set loading state to false after data retrieval
        }
    }

    const updateMessagesWithNewName = () => {
        // Update sender names in messages with the new name
        const updatedMessages = Object.keys(messages).reduce((acc, key) => {
            const updatedMessagesForUser = messages[key].map(message => {
                if (message.sender === 'Mahesh') {
                    return { ...message, sender: name };
                }
                return message;
            });
            acc[key] = updatedMessagesForUser;
            return acc;
        }, {});
        setMessages(updatedMessages);
    };

    const sendMessage = () => {
        if (!currentUser || !newMessage.trim()) return;

        const newMsg = {
            text: newMessage,
            timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
            sender: name
        };

        const updatedMessages = {
            ...messages,
            [currentUser]: [...(messages[currentUser] || []), newMsg],
        };
        setMessages(updatedMessages);
        setNewMessage('');
    };

    const handleInputChange = (event) => {
        setNewMessage(event.target.value);
    };

    const selectUser = (user) => {
        setCurrentUser(user);
    };

    const layoutStyle = {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#F3E8E2'
    };

    const userListStyle = {
        width: '20%',
        borderRight: '2px solid #ccc',
        overflowY: 'auto',
        backgroundColor: '#D1510A',
        padding: '10px',
    };

    const chatStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
    };

    const chatBoxStyle = {
        flex: 1,
        overflowY: 'auto',
        marginBottom: '10px',
    };

    const inputStyle = {
        padding: '10px',
        marginBottom: '10px',
        width: 'calc(100% - 22px)',
    };

    const buttonStyle = {
        padding: '10px',
        width: '100%',
        cursor: 'pointer',
    };

    const messageStyle = {
        padding: '5px',
        margin: '5px 0',
        borderRadius: '10px',
        backgroundColor: '#f0f0f0',
    };

    const timestampStyle = {
        fontSize: '0.8em',
        color: 'black',
    };

    const senderStyle = {
        fontWeight: 'bold',
    };

    if (isLoading) {
        // Render a loading indicator until data is loaded
        return <div>Loading...</div>;
    }

    // Once loading is complete, render the rest of the component
    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn} />
            <div style={layoutStyle}>
                <div style={userListStyle}>
                    {Object.keys(messages).map((user) => (
                        <div key={user} onClick={() => selectUser(user)} style={{ ...messageStyle, backgroundColor: currentUser === user ? '#ddd' : '#f0f0f0' }}>
                            {user}
                        </div>
                    ))}
                </div>
                <div style={chatStyle}>
                    <div style={{backgroundColor: '#848c91'}}>
                        <h2>Chat with {currentUser}</h2>
                    </div>
                    <div style={chatBoxStyle}>
                        {messages[currentUser] && messages[currentUser].map((message, index) => (
                            <div key={index} style={{ ...messageStyle, textAlign: message.sender === name ? 'right' : 'left',backgroundColor:'#F3E8E2'}}>
                                <div style={{ 
                                    display: 'inline-block',
                                    backgroundColor: message.sender === name ? '#D1510A' : '#848c91',
                                    padding: '5px',
                                    borderRadius: '10px',
                                 }}>
                                    <div style={senderStyle}>{message.sender}</div>
                                    <div>{message.text}</div>
                                    <div style={timestampStyle}>{message.timestamp}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        value={newMessage}
                        onChange={handleInputChange}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                sendMessage();
                            }
                        }}
                        style={inputStyle}
                        placeholder="Type a message..."
                    />
                    <button onClick={sendMessage} style={buttonStyle}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chats;
