//helper that sorts by counter number and then cuts off the array at 5 objects
function _toTop5ifyAndSort(list) {
  list.sort((itemA, itemB) => (itemA.count < itemB.count ? 1 : -1));
  while (list.length > 5) {
    list.pop();
  }
  return list;
}

function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  return books.filter((book) => !book.borrows[0].returned).length;
}

function getMostCommonGenres(books) {
  //sort books by genre
  let countList = [];
  let genreList = books.map(({ genre }) => genre);
  let counts = genreList.reduce((r, s) => {
    r[s] = (r[s] || 0) + 1;
    return r;
  }, {});

  let name = Object.keys(counts);
  let count = Object.values(counts);
  for (let i = 0; i < name.length; i++) {
    countList[i] = { name: name[i], count: count[i] };
  }

  return _toTop5ifyAndSort(countList);
}

function getMostPopularBooks(books) {
  let toReturn = [];
  books.forEach((book, i) => {
    let name = book.title;
    let count = book.borrows.length;
    toReturn[i] = { name, count };
  });
  return _toTop5ifyAndSort(toReturn);
}

function getMostPopularAuthors(books, authors) {
  let authorCountList = [];
  authors.forEach((author, i) => {
    let count = 0;
    let tempName = author.name;
    let name = `${tempName.first} ${tempName.last}`;
    authorCountList[i] = { name, count };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        authorCountList[i].count += book.borrows.length;
      }
    });
  });
  return _toTop5ifyAndSort(authorCountList);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
