import React from 'react'


const getRightDay = date => {
    const newDate = new Date(Date.parse(date));
    let day = newDate.getDate();
    if(day < 10) {
        day = '0' + day;
    }
    return day
 }

 const getRightMonth = date => {
     const newDate = new Date(Date.parse(date));
     let month = newDate.getMonth() + 1;
     if(month < 10) {
         month = '0' + month;
     }
     return month
  }

const RightDate = props => {
    return (
        <div>
            <span style={{fontSize: '25px', color: 'black'}}>{getRightDay(props.newsDate)} </span>
            <span style={{opacity: .5}}>/ {getRightMonth(props.newsDate)}</span>
        </div>
    )
}

export default RightDate