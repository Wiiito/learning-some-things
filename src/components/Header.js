import React from 'react';
import logo from '../img/logo.svg';
import avatar from '../img/avatar.svg';
import '../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons'


var notifications = [
    {
        "name":"WOW",
        "desc":"desc",
        "img":"src"
    },
    {
        "name":"WOW",
        "desc":"desc",
        "img":"src"
    },
    {
        "name":"WOW",
        "desc":"desc",
        "img":"src"
    },
    {
        "name":"WOW",
        "desc":"desc",
        "img":"src"
    },
    {
        "name":"WOW",
        "desc":"desc",
        "img":"src"
    },
];
var notificationsNumber = notifications.length;

const Header = () => {
    return (
        <header className='flex jc-sb'>
            <nav className='flex jc-sb'>
                <div className='logo-div'>
                    <a href="/"><img src={logo} className='tran-2'/></a>
                </div>
                <ul className='links-ul no-dec flex ai-c'>
                    <li className='pd-10'><a href='/' className='no-dec tran-2'>Home</a></li>
                    <li className='pd-10'><a href='/' className='no-dec tran-2'>TV Shows</a></li>
                    <li className='pd-10'><a href='/' className='no-dec tran-2'>Movies</a></li>
                    <li className='pd-10'><a href='/' className='no-dec tran-2'>Recently Added</a></li>
                    <li className='pd-10'><a href='/' className='no-dec tran-2'>My List</a></li>
                </ul>
            </nav>
            <div className='menu-right flex ai-c'>
                <button className='search-btn btn mh-10 tran-2'>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
                <h4 className='mh-10 tran-2'>children</h4>
                <button className='bell-btn btn mh-10 tran-2'>
                    <FontAwesomeIcon icon={faBell} />
                    {note()}
                </button>
                <div className='avatar-cont mh-10'>
                    <div className='point avatar tran-2'>
                        <img src={avatar} />
                    </div>
                </div>
            </div>
        </header>
    )
}

function note() {
    if (notificationsNumber > 0) {
        if (notificationsNumber > 9) {
            return <span className='notification-n flex ai-c jc-c more9 tran-2'>+9</span>
        } else {
            return (
                <span className='notification-n flex ai-c jc-c font-16 tran-2'>{notificationsNumber}</span>
            )
        }
    }
}


export default Header
