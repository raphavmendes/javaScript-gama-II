//pegar o input
//Se sim, pega as categorias disponíveis e pergunta qual ele quer
//Se não, mostra todos os livros existentes em ordem de números de página

const livros = require('./dataBase')

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N - ')

if(entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as cetegorias disponíveis')
    console.log('Produtividade', '/História brasileira', '/Américas', '/Estilo de vida', '/Tecnologia')

    const entradaCategoria = readline.question('Qual categoria você escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else{
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis:')
    console.table(livrosOrdenados)
}