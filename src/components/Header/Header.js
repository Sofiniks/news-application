import React from 'react'
import classes from './Header.module.scss'
import Navigation from '../Navigation/Navigation'

const Header = props => {
    return (
        <div className={classes.Header}>
            <h3>US News</h3>
            <Navigation/>
        </div>
    )
}

export default Header