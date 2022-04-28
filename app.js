const read = require ("readline-sync")
const buscarLivros = require('./controlles/buscarLivros')
const ordenarLivrosPorPagina = require('./controlles/listarLivrosOrdenados')
const livrosNaoLidos = require('./controlles/listarLivrosNaoLidos')
const livrosRecomendados = require('./controlles/listarRecomendados')



const resposta = read.question(`
==========MENU==========

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de páginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca de livros não lidos


5 - SAIR 

Digite  um numero [1-5]
`)


// Quando a pessoae escolher oo número 1, eu quero que chame a funcão que vai estar no arquivo buscar livros


console.log(resposta)

switch (resposta){
    case '1':
    buscarLivros()
    break
    case '2':
    ordenarLivrosPorPagina()
    break
    case '3':
    livrosRecomendados()
    break
    case '4':
    livrosNaoLidos()
    break

}
// 
//console.log(livros[0])