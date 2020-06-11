import React from 'react'
import classes from './Navigation.module.scss'
import {NavLink} from 'react-router-dom'

const Navigation = () => {
    return (
        <div className={classes.Navigation}>
            <ul>
                <li><NavLink to= '/' exact activeStyle={{color: 'blue'}}>Home</NavLink></li>
                <li><NavLink to= '/news' exact activeStyle={{color: 'blue'}}>News</NavLink></li>
                <li><NavLink to= '/contacts' exact activeStyle={{color: 'blue'}}>Contacts</NavLink></li>
            </ul>
        </div>
    )
}

export default Navigation