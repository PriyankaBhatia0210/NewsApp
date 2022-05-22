import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source, sourceColor} = this.props
    return (
        
      <div>
        
        <div className="card">
        <span class={`position-absolute top-0 translate-middle badge rounded-pill bg-${sourceColor}`} style={{left:'88%', zIndex:1}}>{source}</span>
        <img src={imageUrl?imageUrl:"https://www.bing.com/th?id=OIP.hf7oNOMsDrPFgigE584-zgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</p>
                <a href={newsUrl} target = '_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
