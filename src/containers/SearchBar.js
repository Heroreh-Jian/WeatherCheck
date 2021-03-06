import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchWeather}from "../actions/index"

class SearchBar extends Component {
  constructor(props){
    super(props);
    
    this.state={term: ""};
    
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
  onSearchChange(event){
    this.setState({term:event.target.value})
    }
    
  onFormSubmit(event){
      event.preventDefault()
 
// fetch data
      this.props.fetchWeather(this.state.term);
      this.setState({term:""})
 
  }
  render() {
    return (
     <form onSubmit={this.onFormSubmit} className="input-group">
     <input 
       placeholder="Search Cities to Check Weather Info"
       className="form-control"
       value={this.state.term}
       onChange={this.onSearchChange}
       />
     <span className="input-group-btn">
     <button type="submit" className="btn btn-success">Search</button>
     </span>
     </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)