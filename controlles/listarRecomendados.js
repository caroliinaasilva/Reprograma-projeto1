const read = require('readline-sync')
const livros = require('../database')


    const livrosRecomendados = () => {
    const recomendar = read.question('Deseja buscar por livros recomedados S/N').toUpperCase()
        console.log(recomendar)

    if (recomendar === 'S'){
    const listarRecomendados = livros.filter(livro => livro.recomenda === true)
        console.table(listarRecomendados)

} else {
    console.log ('tudo bem :), escolha outra opção')
}
}
module.exports = livrosRecomendados