import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,

        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=67094f40903c4e0ab0f73d415277b578&page=1";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults});
    }

    handleNextClick = async ()=>{
        if((this.state.page+1) > Math.ceil(this.state.totalResults/20)){
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=67094f40903c4e0ab0f73d415277b578&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page+1,
                articles: parsedData.articles
            })
        }
    }
    handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=67094f40903c4e0ab0f73d415277b578&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles
        })
    }

  render() {
    return (
      <div className='container p-2'>
        <h2 className='my-2'>News Monk top headlines.</h2>

        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4 my-2" key={element.url}>
                    <NewsItem title={element?element.title:""} description={element?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            })
        }
        </div>
        <div className="container d-flex justify-content-between mt-3">
            <button disabled={this.state.page<=1} type="button" className="btn btn-lg btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" className="btn btn-lg btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
