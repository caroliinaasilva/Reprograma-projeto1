const read = require('readline-sync')
const livros = require('../database')


// Deverá listar livros que ainda não foram lidos
const livrosNaoLidos = () => {
    const naoLidos = read.question('Deseja Buscar por livros nao lidos S/N').toUpperCase()
  
    if (naoLidos === 'S'){
        const livrosNaoLidos = livros.filter(livro => livro.leu === false)
        console.table(livrosNaoLidos)
    
    }else {
        console.log('tudo bem :), escolha outra opcao')
    }

}

module.exports = livrosNaoLidos