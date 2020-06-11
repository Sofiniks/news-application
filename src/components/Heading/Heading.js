import React from 'react'
import classes from './Heading.module.scss'

const Heading = props => {

    const createNewLine = (words) => {
        let arr = words.split(' ')
        if(arr.length === 2) {
          return (
            <h1>
                <div>{arr[0]}</div>
                <div className={classes.blue}>{arr[1]}</div> 
            </h1>)  
        }

        else if(arr.length === 1) {
            return (
            <h1>
                <div className={classes.blue}>{arr[0]}</div>  
            </h1>)
        }else {
            return (
                <h1>
                <div>{arr[0]}</div>
                <div>{arr.slice(1, -1).join(' ')}<span className={classes.blue}> {arr[arr.length-1]}</span></div> 
                </h1>
            )
        }
    }
    return (
        <div className={classes.Heading}>
           {props.children && createNewLine(props.children)}
        </div>
    )
}

export default Heading