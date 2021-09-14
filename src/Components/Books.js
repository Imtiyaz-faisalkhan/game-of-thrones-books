import React from "react";
import Book from "./Book";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: false
    };
  }

  componentDidMount() {
    let request = new XMLHttpRequest();
    let data = null;
    request.onreadystatechange = () => {
      if (request.readyState === 4)
        if (request.status === 200) {
          let booksData = JSON.parse(request.response);
          booksData.forEach(bookData => {
            data = {
              name: bookData.name,
              isbn: bookData.isbn,
              url: bookData.url,
              authors: bookData.authors,
              publisher: bookData.publisher,
            };
            let arr = JSON.parse(localStorage.getItem("Books")).filter(
              x => x.isbn === data.isbn
            );
            if (arr.length === 0) {
              this.props.addBooks({ ...data });
            }
            this.setState({ data: true });
          });
        }
    };
    request.open("GET", "https://www.anapioficeandfire.com/api/books", true);
    request.send();
  }

  render() {
    return (
      <div>
        <div className="ui fixed menu">
          <div className = "ui container">
            <h2>GAME OF THRONES BOOKS</h2>
          </div>
        </div>
        
        <div className = "ui grid container">
          <Book />
        </div>
      </div>
    );
  }
}

export default Books;
