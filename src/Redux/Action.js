export const addBook = ({
    url = "",
    name = "",
    authors = "",
    publisher = "",
    isbn = ""
  } = {}) => ({
    type: "ADD",
    addData: {
      url,
      name,
      authors,
      publisher,
      isbn
    }
  });
  
