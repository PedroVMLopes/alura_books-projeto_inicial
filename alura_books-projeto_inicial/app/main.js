let books = [];
const ApiEndpoint =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

const elementToInsertBooks = document.getElementById("livros");

getApiBooks();

async function getApiBooks() {
  const res = await fetch(ApiEndpoint);
  books = await res.json();
  console.table(books);
  showBooksOnScreen(books);
}

function showBooksOnScreen(bookList) {
  bookList.forEach((book) => {
    elementToInsertBooks.innerHTML += `
		<div class="livro">
			<img class="livro__imagens" src="${book.imagem}" alt="${book.alt}" />
			<h2 class="livro__titulo">
				${book.titulo}
			</h2>
			<p class="livro__descricao">${book.autor}</p>
			<p class="livro__preco" id="preco">R$${book.preco}</p>
			<div class="tags">
				<span class="tag">${book.categoria}</span>
			</div>
		</div>
		`;
  });
}
