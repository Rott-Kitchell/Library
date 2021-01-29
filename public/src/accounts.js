function findAccountById(accounts, id) {
  return accounts.find((account)=> account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
}

function numberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    let borrowedIDs = book.borrows.map((borrow) => borrow.id);
    let counter = borrowedIDs.filter((id) => id === account.id).length;
    return acc + counter;
  }, 0);
};

function getBooksPossessedByAccount(account, books, authors) {
  const user = account.id
  let results = []
  let bookList = books.filter((book) => !book.borrows[0].returned);
  bookList.forEach((book) => {
    authors.forEach((author) => {
      if (user === book.borrows[0].id && book.authorId === author.id) {
        results.push({'title': book.title, 'author': author})
      }
    }
    )
  })
  return results;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
