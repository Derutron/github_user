import { useContext } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Search from './components/Search';
import Card from './components/Card';
import { ThemeContext } from './components/ContextTheme';
import { GithubContext } from './components/UserContext';

function App() {
  const { darkTheme } = useContext(ThemeContext);
  const { user, loading } = useContext(GithubContext);

  const bgLight = "App";
  const bgDark = "Appdark";

  return (
    <div className={!darkTheme ? `${bgLight}` : `${bgDark}`}>
      <Navigation />
      <Search />
      {loading ? (
        <h1 className={darkTheme ? 'loading text-light' : 'loading'}>Loading</h1>
      ) : user ? (
        <Card />
      ) : (
        <h1 className={darkTheme ? 'text-light' : 'text-light'}>Please no User</h1>
      )}
    </div>
  );
}

export default App;
