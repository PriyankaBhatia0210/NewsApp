import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class NewsComponent extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
 
  async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=5bc3eea1d76e4810ab78a2c09b781e6f&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({
          totalResults: parsedData.totalResults,
          articles: parsedData.articles,
        loading: false})


  }

   handlePrevious = async () => {   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=5bc3eea1d76e4810ab78a2c09b781e6f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data =  await fetch(url)
    let parsedData =  await data.json()
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false
    })
    console.log(this.state.page - 1)
  }

  handleNext = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=5bc3eea1d76e4810ab78a2c09b781e6f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data =   await fetch(url)
    let parsedData =  await data.json()
    this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
    })
    console.log(this.state.page + 1)
  }

  
  render() {
    
    return (
      <div>
        {this.state.loading && <Spinner/>}
        <div className="row my-4 mx-2" >
            {!this.state.loading && this.state.articles.map((element) => {
                return <div className="col-md-3">
                        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl = {element.url}/>
                </div>
            })}      
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled = {this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevious}> &larr; Previous</button>
        <button disabled = {this.state.page >= Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>

        </div>
      </div>
    )
  }
}

export default NewsComponent
