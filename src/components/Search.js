import React, {useContext} from 'react';
import { ThemeContext } from './ContextTheme';
import '../css/Search.css'
import ShapeIcon from '../icons/Shape 2.svg';



const Search = () => {
  const {darkTheme,} = useContext(ThemeContext)
 
  const bgLight = "group7"
  const bgDark = "group7dark"

const bg1Light = '#FFFFFF'; // Set your desired background color for the light theme
const bg1Dark = '#1E2A47';  // Set your desired background color for the dark theme
const textColorLight = '#4B6A9B'; // Set your desired text color for the light theme
const textColorDark = '#FFFFFF';  // Set your desired text color for the dark theme


  return (

<div className={!darkTheme?`${bgLight}`:`${bgDark}`}>
      <div className="search-container">
        <img className='shape-icon' src={ShapeIcon} alt="Search Icon" />
        <input type="text" placeholder="Search GitHub username…"
  style={{
    background: darkTheme ? bg1Dark : bg1Light,
    color: darkTheme ? textColorDark : textColorLight,
  }}
/>

      </div>

      <div className='rectangle'>
          <p className='search-text'>Search</p>
      </div>
</div>  
  )
}

export default Search