import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import Nav from './components/Nav';

const projectId = '093ab0d6-d57c-4f47-8ca5-c27212521a20';

const App = () => {
  if (!localStorage.getItem('username')) {
    return <LoginForm />;
  }
  return (
    <div>
      <Nav />
      <ChatEngine
        height='100vh'
        projectID={projectId}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
};

export default App;
