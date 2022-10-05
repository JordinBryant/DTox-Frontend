import './styles.scss';
import { useEffect, useState } from 'react';
import { auth } from './services/firebase';
import Header from './components/Header';
import Main from './components/Main';
import { useRoutes } from 'react-router';




function App() {
  const [ user, setUser] = useState(null);
  
  useEffect(() => {
  
    const unsubscribe = auth.onAuthStateChanged(user => {
    console.log(user)
    console.log('auth state changed')
    setUser(user)
  });

  return () => unsubscribe(); // cleanup effect
  }, []);
  
  return (
    <div className="App">
      <Header user={user}/>
      <Main user={user} />
      
    </div>
  );
}

export default App;
