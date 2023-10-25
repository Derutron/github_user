import React, {useContext} from 'react';
import '../css/Navigation.css'
import MoonIcon from '../icons/moon.svg';
import SunIcon from '../icons/002-sun.svg'
import { ThemeContext } from './ContextTheme';


const Navigation = () => {
  const {darkTheme,themeHandler} = useContext(ThemeContext)


  return (
   <div className='group6'>
      {!darkTheme ? <p className='text1'>devfinder</p> : <p className='text1a'>devfinder</p>}

      <div className='group5'>
          {!darkTheme ? <p className='text2'>DARK</p> : <p className='text2a'>LIGHT</p>}
          {!darkTheme ? <img className='path-icon' onClick={themeHandler} src={MoonIcon} alt="Path Icon" /> : 
          <img className='path-icon1' onClick={themeHandler} src={SunIcon} alt="Path Icon" />}
      </div>
   </div>
  );
}

export default Navigation;


