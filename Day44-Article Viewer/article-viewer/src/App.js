import React, { Component } from 'react';

import './App.css';

class App extends Component {

    state = {
        news: []
    };

    async componentDidMount() {
        await this.getNews();
    }

    async getNews () {
        let news = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=f7ab95d1410a4fd8a89cc7a08ed8d8fc', {
            mode: 'no-cors'
        });
        news = await news.json();

        this.setState({news: news.articles});
    }

    render () {
        return (
            <div className="App">
                <section className="news-section">

                    <div className="container">
                        <div className="main-title-box text-center">
                            <div className="small-title">News & Blog</div>
                            <h2 className="big-title">Our Recent Artciles</h2>
                        </div>
                        <div className="row">
                            { this.state.news.map(article => { return(
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0ms">
                                <div className="news-item">
                                    <div className="news_box">
                                        <div className="newsimg"><img className="img-responsive"
                                                                      src={article.urlToImage}
                                                                      alt=""/></div>
                                        <div className="news-content">
                                            <div className="news_postdate">
                                                <span>{article.publishedAt}</span>
                                            </div>
                                            <a href="#">
                                                <h3>{article.title}</h3>
                                            </a>
                                            <p>{article.description}</p>
                                            <div className="news_authorinfo">
                                                <span><i className="fa fa-user"></i>  <a
                                                    href="">{article.author}</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ) }) }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
