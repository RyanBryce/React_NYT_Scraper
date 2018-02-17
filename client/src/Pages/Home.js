import React, { Component } from 'react';
import axios from 'axios';
import API from "../utils/API";
import Pannel from '../Components/Pannel';
import Input from '../Components/Input';
import Button from '../Components/Button';

class Home extends Component {
  state = {
    topic: '',
    startYear: '',
    endYear: '',
    articles: []
  } 

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    });
  }

  handleClick = (event) => {

    console.log(this.state,"running")
    axios.get('/api/articles', ).then((res) => {
      console.log(res)
      this.setState({
        articles: res
      });
    })
  }

  render() {
    return (
      <div className="textCenter row">
        <Pannel col="col-md-8 col-md-offset-2" title="Search"> 
        <div className="row">
          <Input name="topic" value={this.state.topic} handleChange={this.handleChange} placeHolder="topic"/>
        </div>
        <div className="row">
          <Input name="startYear" value={this.state.startYear} handleChange={this.handleChange} placeHolder="startYear"/>
        </div>
        <div className="row">
          <Input name="endYear" value={this.state.endYear} handleChange={this.handleChange} placeHolder="endYear"/>
        </div>
        <div className="row">
            <Button className="btn btn-success text-center" handleClick={this.handleClick} > Search</Button>
        </div>

        </Pannel>
        <Pannel col="col-md-8 col-md-offset-2" title="Results">


        </Pannel>
      </div>
    );
  }
}

export default Home;