import React from 'react'
import classes from './Home.module.scss'
import Header from '../../components/Header/Header'
import Heading from '../../components/Heading/Heading'
import NewsList from '../../components/NewsList/NewsList'
import Footer from '../../components/Footer/Footer'
import { NavLink } from 'react-router-dom'

const Home = props => {
    const newNewsArr = [];
    for(let i = 0; i < 6; i++) {
        newNewsArr.push(props.news.articles[i])
    }
    
    return (
        <div className={classes.Home}> 
            <Header/>

            <Heading>
                Always latest news
            </Heading>

            <NewsList news={newNewsArr}/>

            <NavLink to= '/news' style={{color: '#004FEC',textDecoration: 'none'}} activeStyle={{textDecoration: 'underline'}}>Stay informed</NavLink>

            <Footer/>
         </div>
    )
}

export default Home;