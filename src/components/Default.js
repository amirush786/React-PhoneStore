import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-4">404</h1>
            <h1>Error</h1>
            <h2>Page not found
              <span><i className="fas fa-sad-tear"></i></span>
            </h2>
            <h3>The request URl
             <span className="text-danger">{this.props.location.pathname}</span> 
               was not found </h3>
          </div>
        </div>
      </div>
    )
  }
}
