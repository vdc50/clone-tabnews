MODELS
let livros = []; // Simulando um banco de dados simples em memória.

function adicionarLivro(titulo, autor, ano) {
const livro = {
id: livros.length + 1,
titulo,
autor,
ano,
};
livros.push(livro);
return livro;
}

function removerLivro(id) {
const index = livros.findIndex((livro) => livro.id === id);
if (index === -1) return null;

const [removido] = livros.splice(index, 1);
return removido;
}

function buscarLivro(titulo) {
return livros.filter((livro) => livro.titulo.includes(titulo));
}

exports.adicionarLivro = adicionarLivro;
exports.removerLivro = removerLivro;
exports.buscarLivro = buscarLivro;

TESTS/UNIT
const biblioteca = require("../../models/biblioteca");

test("Adicionar um livro", () => {
const livro = biblioteca.adicionarLivro(
"O Senhor dos Anéis",
"J.R.R. Tolkien",
1954,
);
expect(livro).toHaveProperty("id");
expect(livro.titulo).toBe("O Senhor dos Anéis");
});

test("Remover um livro", () => {
const livroAdicionado = biblioteca.adicionarLivro(
"1984",
"George Orwell",
1949,
);
const livroRemovido = biblioteca.removerLivro(livroAdicionado.id);
expect(livroRemovido.titulo).toBe("1984");
});

test("Buscar um livro pelo título", () => {
biblioteca.adicionarLivro("Dom Quixote", "Miguel de Cervantes", 1605);
const resultados = biblioteca.buscarLivro("Dom Quixote");
expect(resultados).toHaveLength(1);
expect(resultados[0].titulo).toBe("Dom Quixote");
});

test("Não encontrar um livro pelo título", () => {
const resultados = biblioteca.buscarLivro("Um livro inexistente");
expect(resultados).toHaveLength(0);
});
