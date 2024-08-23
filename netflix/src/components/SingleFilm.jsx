import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class SingleFilm extends Component {
  render() {
    return (
      <div className="col mb-2 text-center px-1">
        <img
          className="img-fluid"
          src={this.props.poster}
          alt={this.props.alt}
          style={{
            objectFit: "contain",
            width: "450px",
            height: "250px",
          }}
        />
      </div>
    );
  }
}

export default SingleFilm;
