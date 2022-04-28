// 2 - ORDENAR: Ordenar livros por quantidade de páginas

const read = require('readline-sync')
const livros = require('../database')


//Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas.

const ordenarLivrosPorPagina = () => {
    const ordenar = read.question('Deseja buscar por quantidade de paginas S/N').toUpperCase()

      if(ordenar === 'S'){
        const ordenar = livros.sort ((a, b) => { 
            return a.paginas - b.paginas;})
            console.table(ordenar)

        }else {
            return (`tudo bem, escolha outra opção`)
        }
    }

module.exports = ordenarLivrosPorPagina