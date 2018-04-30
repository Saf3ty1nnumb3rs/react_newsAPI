import React, { Component } from "react";
import NewSingle from "./NewSingle";
import Error from "./Error";

class News extends Component {
  state = {
    news: [],
    error: false
  };

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${
      this.props.news.query
    }&apiKey=d3fe9928ead64aaca11d543049287e80`;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          news: data.articles
        });
      })
      .catch(error => {
        this.setState({
          error: true
        });
        console.log(error);
      });
  }

  renderItems = () => {
    return this.state.error ? (
      <Error />
    ) : (
      this.state.news.map(item => {
        return <NewSingle key={item.url} item={item} />;
      })
    );
  };

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;
