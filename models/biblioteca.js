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
