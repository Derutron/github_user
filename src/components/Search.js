import React, { useContext } from 'react';
import { ThemeContext } from './ContextTheme';
import '../css/Search.css';
import ShapeIcon from '../icons/Shape 2.svg';
import { GithubContext } from './UserContext';

const Search = () => {
  const { darkTheme } = useContext(ThemeContext);
  const { searchTerm, setSearchTerm, getGithubUser, error } = useContext(GithubContext);

  const bgLight = 'group7';
  const bgDark = 'group7dark';

  const bg1Light = '#FFFFFF'; 
  const bg1Dark = '#1E2A47'; 
  const textColorLight = '#4B6A9B'; 
  const textColorDark = '#FFFFFF'; 

  const handleSubmit = () => {
    if (!searchTerm) {
      alert('Enter username');
    } else {
      getGithubUser();
    }
  };

  return (
    <div className={!darkTheme ? `${bgLight}` : `${bgDark}`}>
      <div className="search-container">
        <img className="shape-icon" src={ShapeIcon} alt="Search Icon" />
        <input
          type="text"
          placeholder="Search GitHub username…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            background: darkTheme ? bg1Dark : bg1Light,
            color: darkTheme ? textColorDark : textColorLight,
          }}
        />
        {error && (
          <div className="error-container">
            {!darkTheme ? <span className="error-message">{error}</span> : <span className="error-message1">{error}</span>}
          </div>
        )}
      </div>

      <button onClick={handleSubmit}>
        <p className="search-text">Search</p>
      </button>
    </div>
  );
};

export default Search;
