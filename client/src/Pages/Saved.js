import React, { Component } from 'react';
import API from '../utils/API';
import Article from '../Components/Article';



class Saved extends Component {
  state = {
    savedArticles: []
  } 

  componentDidMount() {
    API.getSavedArticles().then((res) => {
      console.log(res)
      this.setState({
        savedArticles: res.data
      });
    })
  }

  handleDelete = (id) => {
    console.log(id)
    API.deleteArticle(id).then((res) => {
      console.log(res)
        this.setState({
          savedArticles: res.data
        });
    })
  }

  formatDate = (date) => {
    const articleDate = new Date(date)
    return date ? (`${articleDate.getMonth() + 1}/${articleDate.getDate()}/${articleDate.getFullYear()}`) : `Not Provided`
  }


  render() {
    return (
      <div>
        {this.state.savedArticles.map((article, i) => {
          return <Article
            handleClick={this.handleDelete}
            key={article._id}
            id={article._id}
            href={article.url}
            date={this.formatDate(article.date)}
            snippet={article.title}
            buttonName="delete">
            {article.snippet}
          </Article>
        })}: 
        <h1>No Saved Articles Yet</h1>}
      </div>
    );
  }
}

export default Saved;