function findAuthorById(authors, id1) {
  return authors.find((author)=> author.id === id1)
}

function findBookById(books, id) {
  return books.find((book)=> book.id === id)
}
//const { age, location: { city, state }, relatives: { wife: { name } } } = sampleState
function partitionBooksByBorrowedStatus(books) {
  let isBorrowed = books.filter((book) => !book.borrows[0].returned);
  let isntBorrowed = books.filter((book) => book.borrows[0].returned);
  return [isBorrowed, isntBorrowed];
}

function getBorrowersForBook({borrows}, accounts) {
  let toReturn = [];
  borrows.forEach((borrow, i) => {
    let borrowerAccount = accounts.find((account)=> account.id === borrow.id);
    toReturn[i] = {...borrowerAccount, ...borrow};
  });
  while (toReturn.length > 10) toReturn.pop();
  return toReturn;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};