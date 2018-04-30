import React, { Component } from "react";
import "./App.css";
import News from "./News/News";
import Sidenews from './News/Sidenews'

class App extends Component {
  state = {
    newsA: {
      type: "top-headlines",
      query: "sources=bbc-news"
    },

    newsB: {
      type: "everything",
      query: "domains=wsj.com,nytimes.com"
    },
    newsC: {
      type: "everything",
      query: "domains=comicbookmovie.com&language=en"
    },
    viewA: true,
    viewB: false
  };

  toggleView = () => {
    this.setState({
      viewA: !this.state.viewA,
      viewB: !this.state.viewB
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="/" className="bran-logo center">
                My Feed
              </a>
            </div>
          </nav>
        </div>
        <div className="row">
          <button onClick={this.toggleView}>Change Feed</button>
          <div className="col s8">
            {this.state.viewA ? <News news={this.state.newsA} /> : null}

            {this.state.viewB ? <News news={this.state.newsB} /> : null}
          </div>
          <div className="col s4">
            <Sidenews news={this.state.newsC} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
