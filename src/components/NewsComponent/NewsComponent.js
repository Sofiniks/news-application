import React from 'react'
import classes from './NewsComponent.module.scss'
import {withRouter} from 'react-router-dom'
import RightDate from '../Date/RightDate'


const NewsComponent = props => {

    return (
        <li className={classes.NewsComponent} onClick={() => {props.history.push('/news/' + props.newsText)}}>
            <div className={classes.newsText}>
                {props.newsText}
            </div>
            <div className={classes.newsInfo}>
                <div className={classes.newsSource}>{props.newsSource}</div>
                <RightDate 
                newsDate={props.newsDate}
                />
            </div>
        </li>
    )
}

export default withRouter(NewsComponent)