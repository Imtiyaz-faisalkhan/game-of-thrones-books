import React from "react";
import { Link } from "react-router-dom";



class BookInfo extends React.Component {
  

  render() {
    return (
      <div className="four wide column">
        <Link
          to={{ pathname: "/characters", url: this.props.data.url }}
          style={{ color: "white" }}>
          <div className="ui cards">
            <div className = "card">
              <div className = "content">
                <div className = "header">{this.props.data.name}</div>
                <div className = "metaname">{this.props.data.publisher}</div>
                <div className = "meta">{this.props.data.authors[0]}</div>
              </div>
            </div> 
          </div>
        </Link>
      </div>
    );
  }
}

export default BookInfo;
