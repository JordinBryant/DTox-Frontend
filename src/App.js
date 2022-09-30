import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
