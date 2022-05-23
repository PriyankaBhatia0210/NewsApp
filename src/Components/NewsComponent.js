import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const NewsComponent =(props)=> {
  const[articles, setArticles] = useState([])
  const[loading, setLoading] = useState(true)
  const[page, setPage] = useState(1)
  const[totalResults, settotalResults] = useState(0)
  document.title = 'NewsApp ' + props.categories

  const updateNews = async()=>{
    props.setProgress(20)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.categories}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true)
      let data = await fetch(url)
      props.setProgress(50)
      let parsedData = await data.json()
      props.setProgress(70)
      setArticles(parsedData.articles)
      settotalResults(parsedData.totalResults)
      setLoading(false)
      props.setProgress(100)
  }

  useEffect(()=> {
    updateNews()
  }, [])

  const fetchMoreData = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.categories}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)  
    let data = await fetch(url)
      let parsedData = await data.json()
      setArticles(articles.concat(parsedData.articles))
      settotalResults(parsedData.totalResults)
  }
    
    return (
      <>
      <h3 className='text-center' style={{margin: '35px 0px', marginTop: '55px'}}> NewsMonkey - Top {props.categories} headlines</h3>
        {loading && <Spinner/>}
        <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
        <div className="container" >
        <div className="row my-1 mx-1" >
          
            {articles.map((element) => {
                return <div className="col-md-3" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl = {element.url} author={element.author} date={element.publishedAt} source={element.source.name} sourceColor={props.sourceColor}/>
                </div>
            })}      
        </div>
        </div>
        </InfiniteScroll>
        </>
      
    )

}

NewsComponent.defaultPropTypes = {
  country: 'in', 
  pageSize: 8,
  categories: 'health',
  sourceColor: 'danger'
}

NewsComponent.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  categories: PropTypes.string,
  sourceColor: PropTypes.string
}

export default NewsComponent
