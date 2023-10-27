import React, { useContext } from 'react';
import { ThemeContext } from './ContextTheme';
import { GithubContext } from './UserContext';
import { format,parseISO } from 'date-fns'
import '../css/Card.css';
import Pin from '../icons/003-pin.svg';
import DarkPin from '../icons/dark-pin.svg';
import Twitter from '../icons/004-twitter.svg';
import DarkTwitter from '../icons/dark-twitter.svg';
import Url from '../icons/002-url.svg';
import DarkUrl from '../icons/dark-url.svg';
import Office from '../icons/001-office-building.svg';
import DarkOffice from '../icons/dark-office.svg';

const Card = () => {
    const { darkTheme } = useContext(ThemeContext);
    const { user } = useContext(GithubContext);

    const bgLight = "rectangle-copy";
    const bgDark = "rectangle-copydark";

    return (
        <div className={!darkTheme ? `${bgLight}` : `${bgDark}`}>
            <div className='cardgroup1'>
                {user.avatar_url && (
                    <img src={user?.avatar_url} alt='bitmap' className='bitmap' />
                )}
                <div className='cardgroup2'>
                    <div className='cardgroup3'>
                        {darkTheme ? (
                            <p className={darkTheme &&'cardtext1a'}>{user.name===null?'No Username':user?.name}</p>
                        ) : (
                            <p className='cardtext1'>{user.name===null?'No Username':user?.name}</p>
                        )}
                        {darkTheme ? (
                            <p className='cardtext2a'>Joined {format(parseISO(user?.created_at),'d,MMMM yyyy')}</p>
                        ) : (
                            <p className='cardtext2'>Joined {format(parseISO(user?.created_at),'d,MMMM yyyy')}</p>
                        )}
                    </div>
                    <p className='cardtext3'>@{user?.login}</p>

                    <div className='cardgroup4'>
                        {darkTheme ? (
                            <p className='cardtext4a'>{user.bio===null? 'This profile has no bio' : user.bio} </p>
                        ) : (
                            <p className='cardtext4'>{user.bio===null? 'This profile has no bio' : user.bio}</p>
                        )}
                    </div>
                    <div className='cardgroup5'>
                        {darkTheme ? (
                            <div className='cardgroup6a'>
                                <div className='cardgroup7'>
                                    <p className='cardtext5a'>repos</p>
                                    <p className='cardtext6a'>{user.public_repos}</p>
                                </div>
                                <div className='cardgroup8'>
                                    <p className='cardtext5a'>Followers</p>
                                    <p className='cardtext6a'>{user.followers}</p>
                                </div>
                                <div className='cardgroup9'>
                                    <p className='cardtext5a'>Following</p>
                                    <p className='cardtext6a'>{user.following}</p>
                                </div>
                            </div>
                        ) : (
                            <div className='cardgroup6'>
                                <div className='cardgroup7'>
                                    <p className='cardtext5'>repos</p>
                                    <p className='cardtext6'>{user.public_repos}</p>
                                </div>
                                <div className='cardgroup8'>
                                    <p className='cardtext5'>Followers</p>
                                    <p className='cardtext6'>{user.followers}</p>
                                </div>
                                <div className='cardgroup9'>
                                    <p className='cardtext5'>Following</p>
                                    <p className='cardtext6'>{user.following}</p>
                                </div>
                            </div>
                        )}

                        <div className='cardgroup12'>
                            <div className='cardgroup10'>
                                {darkTheme ? (
                                    <img className='darkpin' src={DarkPin} alt="dark pin" />
                                ) : (
                                    <img className='pin' src={Pin} alt="pin" />
                                )}
                                {darkTheme ? (
                                    <p className='cardtext7a'>{user.location || 'Not available'}</p>
                                ) : (
                                    <p className='cardtext7'>{user.location || 'Not available'}</p>
                                )}
                            </div>

                            <div className='cardgroup11'>
                                {darkTheme ? (
                                    <img className='DarkTwitter' src={DarkTwitter} alt="DarkTwitter" />
                                ) : (
                                    <img className='twitter' src={Twitter} alt="Twitter" />
                                )}
                                {darkTheme ? (
                                    <p className='cardtext7a'>{user.twitter_username || 'Not available'}</p>
                                ) : (
                                    <p className='cardtext7'>{user.twitter_username || 'Not available'}</p>
                                )}
                            </div>
                        </div>

                        <div className='cardgroup13'>
                            <div className='cardgroup14'>
                                {darkTheme ? (
                                    <img className='DarkUrl' src={DarkUrl} alt="DarkUrl" />
                                ) : (
                                    <img className='url' src={Url} alt="Url" />
                                )}
                                {darkTheme ? (
                                    <p className='cardtext8a'>{user.url}</p>
                                ) : (
                                    <p className='cardtext8'>{user.url}</p>
                                )}
                            </div>

                            <div className='cardgroup15'>
                                {darkTheme ? (
                                    <img className='DarkOffice' src={DarkOffice} alt="DarkOffice" />
                                ) : (
                                    <img className='office' src={Office} alt="Office" />
                                )}
                                {darkTheme ? (
                                    <p className='cardtext8a'>{user.company || 'Not available'}</p>
                                ) : (
                                    <p className='cardtext8'>{user.company || 'Not available'}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
