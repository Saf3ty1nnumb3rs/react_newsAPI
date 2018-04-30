import React, { Component } from 'react';
import axios from 'axios'
import SingleSide from './SingleSide'
import Error from './Error'


class Sidenews extends Component {
    state = {
        sideNews: [],
        error: false
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=d3fe9928ead64aaca11d543049287e80`

        axios.get(url).then((response) => {
            this.setState( {
                sideNews: response.data.articles
            })
        }).catch((error) => {
            this.setState( { 
                error: true
            } )
            console.log(error)
        })

      

    }

    renderItems =() => {
        return this.state.error ?
            (<Error />)
         
        : (this.state.sideNews.map((item) => {
            return(
            <SingleSide key={item.url} item={item} />
            )
        }))
        
    }

    render() {
        return (
            <div className="row">
                {this.renderItems()}
                
            </div>
        );
    }
}

export default Sidenews;