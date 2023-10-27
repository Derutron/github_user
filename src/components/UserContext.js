import React, { createContext, useState } from 'react';
import axios from 'axios';
// import { REACT_APP_GITHUBTOKEN } from '../dotenv';
export const GithubContext = createContext();

const UserContext = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 const apiToken = process.env.REACT_APP_GITHUBTOKEN;

  const getGithubUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.github.com/users/${searchTerm}`, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      });

      const data = await response.data;
      setLoading(false);
      setUser(data);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError('No Result'); // Set the error message to 'no result'
      setLoading(false);
      setUser(null); // Clear user data when no result is found
    }
  };

  return (
    <GithubContext.Provider
      value={{
        user,
        searchTerm,
        setSearchTerm,
        loading,
        error,
        getGithubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default UserContext;

