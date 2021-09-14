import React from "react";
import { connect } from "react-redux";
import BookInfo from "./BookInfo";

const Books = props => {
  return (
    <div className="ui grid container">
      {props.BooksData.map(BookData => (
        <BookInfo key={BookData.isbn} data={BookData} />
      ))}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    BooksData: state
  };
};
export default connect(mapStateToProps)(Books);
