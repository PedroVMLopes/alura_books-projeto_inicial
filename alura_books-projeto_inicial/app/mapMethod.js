const elementToInsertBooks = document.getElementById("livros");

function applyDiscount(books) {
  const discount = 0.3;
  let booksWithDiscount = books.map((book) => {
    return { ...book, preco: book.preco - book.preco * discount };
  });
  return booksWithDiscount;
}

window.applyDiscount = applyDiscount;
