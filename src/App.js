import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import './fonts/fonts.css'
import {Route, Switch} from 'react-router-dom'
import News from './containers/News/News'
import Contacts from './containers/Contacts/Contacts'
import Home from './containers/Home/Home';
import Article from './containers/Article/Article'

function App() {

  const [news, updateNews] = useState(null);
  const requestUrl = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=107d1a81e233440b8d4900476747a312';
    

  useEffect( () => {
          const fetchData = async () => {
            try{
              const response = await axios.get(requestUrl);
              updateNews(response.data)
            }catch(e) {
              console.log(e)
            }
          }
          fetchData()
      }, [])


  return (
    <div>
      <Switch>
        <Route path='/' exact render={news ? () => <Home news={news}/> : null}/>
        <Route path='/news' exact render={news ? () => <News news={news}/> : null}/>
        <Route path='/news/:name'  exact render={news ? () => <Article news={news}/> : null}/>
        <Route path='/contacts' component={Contacts}/>
      </Switch>
    </div>
  );
}

export default App;
