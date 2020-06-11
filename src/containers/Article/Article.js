import React from 'react'
import classes from './Article.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Heading from '../../components/Heading/Heading'
import {withRouter} from 'react-router-dom'
import RightDate from '../../components/Date/RightDate'
import ErrorPage from '../ErrorPage/ErrorPage'


const Article = props => {
       
        const getRightNews = props => {
            if(props) {
               return props.news.articles.filter(item => {
                return item.title === props.match.params.name
            }) 
            }  
        }

        const newsDetails = getRightNews(props);
       

    
    return (
        newsDetails[0] ? 
        <div className={classes.Article}>
            <Header/>

            <main>
                <div className={classes.Heading}>
            <Heading>
                {newsDetails[0].title}
            </Heading>

            <div className={classes.source}>{newsDetails[0].source.name}</div>

            <RightDate className={classes.Date} newsDate={newsDetails[0].publishedAt}/>

            </div>

            <div className={classes.Content}>
                <div className={classes.ContentImage}>
                    <img src={newsDetails[0].urlToImage} alt='NewsImage'></img>
                </div>
                <div className={classes.ContentText}>
                   {newsDetails[0].content} 
                </div>
                
            </div> 
            </main>
           <Footer/>
        </div>
        : <ErrorPage/>
    )
}

export default withRouter(Article)