import React, { Component } from 'react';
import API from "../utils/API";
import Pannel from '../Components/Pannel';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Article from '../Components/Article';

class Home extends Component {
  state = {
    q: '',
    start_year: '',
    end_year: '',
    articles: [],
    message: "Search To See Articles"
  } 

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    });
  }

  //devyn was here
  handleClick = event => {

    console.log(this.state,"running")
    API.getArticles({
      q: this.state.q,
      start_year: this.state.start_year,
      end_year: this.state.end_year
    }).then((response) => {
      console.log(response)
      this.setState({
        articles: response.data
      });
    })
  }
  handleSave = (event) => {
    console.log("working");
    // API.saveArticle()
  }
  formatDate = (date) => {
    const articleDate = new Date(date)
    return `${articleDate.getDate()}/${articleDate.getDate()}/${articleDate.getDate()}`}
  


  render() {
    return (
      <div className="textCenter row">
        <Pannel col="col-md-8 col-md-offset-2" title="Search"> 
          <div className="row text-center">
            <h5>Topic </h5>
          <Input name="q" value={this.state.q} handleChange={this.handleChange} placeHolder="topic"/>
        </div>
          <div className="row text-center">
            <h5>Start Year </h5>
          <Input name="start_year" value={this.state.start_year} handleChange={this.handleChange} placeHolder="startYear"/>
        </div>
        <div className="row text-center">
          <h5>End Year </h5>
          <Input name="end_year" value={this.state.end_year} handleChange={this.handleChange} placeHolder="endYear"/>
        </div>
        <div className="row text-center">
              <h5> </h5>
              <Button className="btn btn-success text-center" handleClick={this.handleClick} > Search</Button>
        </div>

        </Pannel>
        { this.state.articles.length ? 

        <Pannel col="col-md-8 col-md-offset-2" title="Results">
          {this.state.articles.map((article, i) => {
              return <Article 
                        handleClick={this.handleSave} 
                        key={article._id} 
                        id={article._id} 
                        href={article.web_url}
                date={this.formatDate(article.pub_data)}> 
                        { article.snippet } 
                      </Article>
          })}

        </Pannel> :
          <Pannel col="col-md-8 col-md-offset-2" title="Results">
            <div className="row text-center">
              <h1>{this.state.message}</h1>
            </div>

          </Pannel>
        }
      </div>
    );
  }
}

export default Home;