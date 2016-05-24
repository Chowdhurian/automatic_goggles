'use strict';
import React from 'react';
import $ from "jquery";

export default class TwitterController extends React.Component {
  constructor(props){
    super(props);
    this.state = {data:[],loading: true, index: 0};
  }
  componentDidMount(){
      this.serverRequest =$.ajax({
      type: 'POST',
      url: '/twitter',
      dataType: 'json',
      success: function(tweets){
        this.setState({data: tweets, loading:false});
      }.bind(this),
      error: function(err) { console.error('error', err) }.bind(this)
    });
  }
  componentDidUpdate(){
    if(twttr){
      window.twttr.widgets.load(document.getElementsByClassName("MNLAtwitter"));
    }
  }
  render(){
    if(!this.state.loading){
    var interval = setTimeout(()=>{
      // setTimeout
      if (this.state.index >= this.state.data.data.length-1){
        this.setState({index: 0});
      }else{
        this.setState({index: this.state.index + 4});
      }
    },10000);}
    return(
      <ul>
        <li>
          {!this.state.loading ?
          <div className="MNLAtwitter" dangerouslySetInnerHTML={{__html: this.state.data.data[this.state.index].html }} /> :
          <img className="loading" src="images/loading_spinner.gif" alt="Loading..." />}
        </li>
        <li>
          {!this.state.loading ?
          <div  className="MNLAtwitter" dangerouslySetInnerHTML={{__html: this.state.data.data[this.state.index + 1].html }} /> :
          <img className="loading" src="images/loading_spinner.gif" alt="Loading..." />}
        </li>
        <li>
          {!this.state.loading ?
          <div className="MNLAtwitter" dangerouslySetInnerHTML={{__html: this.state.data.data[this.state.index + 2].html }} /> :
          <img className="loading" src="images/loading_spinner.gif" alt="Loading..." />}
        </li>
        <li>
          {!this.state.loading ?
          <div className="MNLAtwitter" dangerouslySetInnerHTML={{__html: this.state.data.data[this.state.index + 3].html }} /> :
          <img className="loading" src="images/loading_spinner.gif" alt="Loading..." />}
        </li>
      </ul>
    )};
}

{/*<h1>
 </h1>*/}
