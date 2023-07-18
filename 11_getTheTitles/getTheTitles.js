const getTheTitles = function (books) {
  let bookTitles = [];
  books.forEach((bookTitle) => {
    bookTitles.push(bookTitle.title);
  });

  return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
