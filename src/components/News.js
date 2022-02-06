import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,

        }
    }

    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=67094f40903c4e0ab0f73d415277b578&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles,
                       totalResults: parsedData.totalResults, 
                       loading: false
                    });
    }
    async componentDidMount(){
        this.updateNews();
    }

    handleNextClick = async ()=>{
        this.setState({page: this.state.page + 1})
        this.updateNews();
    }
    handlePrevClick = async ()=>{
        this.setState({page: this.state.page - 1})
        this.updateNews();
    }

  render() {
    return (
      <div className='container p-2'>
        <h1 className='my-2 text-center bg-dark text-light p-2'>News Monk top headlines.</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4 my-2" key={element.url}>
                    <NewsItem title={element?element.title:""} 
                              description={element?element.description:""}
                              imageUrl={element.urlToImage}
                              newsUrl={element.url} 
                              author={element.author} 
                              date={element.publishedAt}
                              source={element.source.name}
                    />
                </div>
            })
        }
        </div>
        <div className="container d-flex justify-content-between mt-3">
            <button disabled={this.state.page<=1} type="button" className="btn btn-lg btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={((this.state.page+1) > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-lg btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
