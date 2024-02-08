import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
            height = '100vh'
            projectID="2e43d9be-9d7d-4834-92b0-fa9a4067cd7a"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;