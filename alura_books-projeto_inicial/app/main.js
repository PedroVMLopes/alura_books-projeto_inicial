let books = [];
const ApiEndpoint =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

const elementToInsertBooks = document.getElementById("livros");

getApiBooks();

async function getApiBooks() {
  const res = await fetch(ApiEndpoint);
  books = await res.json();
  let booksWithDiscount = applyDiscount(books);
  showBooksOnScreen(booksWithDiscount);
}
window.getApiBooks = getApiBooks;
