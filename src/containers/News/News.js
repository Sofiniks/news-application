import React from 'react'
import classes from './News.module.scss'
import Header from '../../components/Header/Header'
import Heading from '../../components/Heading/Heading'
import NewsList from '../../components/NewsList/NewsList'
import Footer from '../../components/Footer/Footer'



const News = props => {
    
    return (
        <div className={classes.News}>
            <Header/>

            <Heading>
                Stay informed
            </Heading>

            <NewsList news={props.news.articles}/>

            <Footer/>
           


        </div>
    )
}

export default News