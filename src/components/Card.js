import React, {useContext} from 'react';
import { ThemeContext } from './ContextTheme';
import '../css/Card.css'
import Bitmap from '../icons/Bitmap.png';
import Pin from '../icons/003-pin.svg';
import DarkPin from '../icons/dark-pin.svg'
import Twitter from '../icons/004-twitter.svg';
import DarkTwitter from '../icons/dark-twitter.svg'
import Url from '../icons/002-url.svg';
import DarkUrl from '../icons/dark-url.svg'
import Office from '../icons/001-office-building.svg';
import DarkOffice from '../icons/dark-office.svg'

const Card = () => {
    const {darkTheme,} = useContext(ThemeContext)

    const bgLight = "rectangle-copy"
    const bgDark = "rectangle-copydark"

  return (
    <div className={!darkTheme?`${bgLight}`:`${bgDark}`}>
        <div className='cardgroup1'>
            <img className='bitmap' src={Bitmap} alt="bitmap"/>
            <div className='cardgroup2'>
                <div className='cardgroup3'>
                    {!darkTheme ? <p className='cardtext1'>The Octocat </p> : <p className='cardtext1a'>The Octocat </p>}
                    {!darkTheme ? <p className='cardtext2'>Joined 25 Jan 2011</p> : <p className='cardtext2a'>Joined 25 Jan 2011</p>}
                </div>
                <p className='cardtext3'>@octocat</p>
          
                <div className='cardgroup4'>
                    {!darkTheme ? <p className='cardtext4'>This profile has no bio</p> : <p className='cardtext4a'>This profile has no bio</p>}
                </div>
                <div className='cardgroup5'>
                    {!darkTheme ? <div className='cardgroup6'>
                        <div className='cardgroup7'>
                            <p className='cardtext5'>repos</p>
                            <p className='cardtext6'>8</p>
                        </div>
                        <div className='cardgroup8'>
                            <p className='cardtext5'>Followers</p>
                            <p className='cardtext6'>3988</p>
                        </div>
                        <div className='cardgroup9'>
                            <p className='cardtext5'>Following</p>
                            <p className='cardtext6'>55</p>
                        </div>
                    </div> : <div className='cardgroup6a'>
                        <div className='cardgroup7'>
                            <p className='cardtext5a'>repos</p>
                            <p className='cardtext6a'>8</p>
                        </div>
                        <div className='cardgroup8'>
                            <p className='cardtext5a'>Followers</p>
                            <p className='cardtext6a'>3988</p>
                        </div>
                        <div className='cardgroup9'>
                            <p className='cardtext5a'>Following</p>
                            <p className='cardtext6a'>55</p>
                        </div>
                    </div>}

                  
                        <div className='cardgroup12'>
                            <div className='cardgroup10'>
                            {!darkTheme ? <img className='pin' src={Pin} alt="pin"/> : <img className='darkpin' src={DarkPin} alt="dark pin"/>}
                            {!darkTheme ? <p className='cardtext7'>San Francisco</p> : <p className='cardtext7a'>San Francisco</p>}
                            </div>
                    
                            <div className='cardgroup11'>
                            {!darkTheme ? <img className='twitter' src={Twitter} alt="Twitter"/> : <img className='DarkTwitter' src={DarkTwitter} alt="DarkTwitter"/>}
                            {!darkTheme ? <p className='cardtext7'>Not Available</p> : <p className='cardtext7a'>Not Available</p>}
                            </div>
                        </div>

                        <div className='cardgroup13'>
                            <div className='cardgroup14'>
                            {!darkTheme ? <img className='url' src={Url} alt="Url"/> : <img className='DarkUrl' src={DarkUrl} alt="DarkUrl"/>}
                            {!darkTheme ? <p className='cardtext8'>https://github.blog</p> : <p className='cardtext8a'>https://github.blog</p>}
                            </div>
                    
                            <div className='cardgroup15'>
                            {!darkTheme ? <img className='office' src={Office} alt="Office"/> : <img className='DarkOffice' src={DarkOffice} alt="DarkOffice"/>}
                            {!darkTheme ? <p className='cardtext8'>@github</p> : <p className='cardtext8a'>@github</p>}
                            </div>
                        </div>
                   
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Card