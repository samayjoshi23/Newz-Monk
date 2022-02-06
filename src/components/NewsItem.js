import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {

    let {title, description, imageUrl,newsUrl,author,date,source} = this.props;

    return (
      <div className='mt-4'>
        <div className="card">
            <img src={imageUrl} className="card-img-top article-img" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">
                  {title}
                  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger px-3"
                        style={{left:'50%', zIndex: '10'}}
                  >
                    {source}
                  </span>
                </h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toUTCString()}</small></p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>

        </div>
      </div>
    )
  }
}

export default NewsItem
