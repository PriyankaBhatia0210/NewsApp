import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class NewsComponent extends Component {
  static defaultPropTypes = {
    country: 'in', 
    pageSize: 8,
    categories: 'health',
    sourceColor: 'danger'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    categories: PropTypes.string,
    sourceColor: PropTypes.string
  }
    constructor(props){
        super(props);
        document.title = 'NewsApp ' + this.props.categories
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
 
  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=5bc3eea1d76e4810ab78a2c09b781e6f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({
          totalResults: parsedData.totalResults,
          articles: parsedData.articles,
        loading: false})
  }
  async componentDidMount(){
    this.updateNews()
  }

   handlePrevious = async () => {    
    this.setState({page: this.state.page - 1})
    this.updateNews()
  }

  handleNext = async () => {
    this.setState({page: this.state.page + 1})
    this.updateNews()
  }

  
  render() {
    
    return (
      <div>
        {this.state.loading && <Spinner/>}
        <div className="row my-1 mx-1" >
          <h4 className='text-center' style={{margin: '35px 0px'}}> NewsMonkey - Top {this.props.categories} headlines</h4>
            {!this.state.loading && this.state.articles.map((element) => {
                return <div className="col-md-3">
                        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl = {element.url} author={element.author} date={element.publishedAt} source={element.source.name} sourceColor={this.props.sourceColor}/>
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
