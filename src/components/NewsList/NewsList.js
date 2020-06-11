import React from 'react'
import classes from './NewsList.module.scss'
import NewsComponent from '../../components/NewsComponent/NewsComponent'


    const NewsList = props => {
      
        const showNews = () => {
        if(props){
            const news = props.news;
        return news.map((item, index) => (
               <NewsComponent
                    key={index}
                    id={index}
                    newsText={item.title}
                    newsSource={item.source.name}
                    newsDate={item.publishedAt}
                 /> 
    
    ))
    }
}
    
    return (
        <div className={classes.NewsList}>
            <ul>
            {showNews()}
            </ul>          
        </div>
    )
}
    
   



export default NewsList



// const NewsList = () => {

// const [news, updateNews] = useState(null);
// const requestUrl = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=107d1a81e233440b8d4900476747a312';
    

// useEffect( () => {
//         const fetchData = async () => {
//             const response = await axios.get(requestUrl);
//             updateNews(response.data)
//         }
//         fetchData()
//     }, [])