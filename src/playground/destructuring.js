// const book = {
//     title: 'O Alienista',
//     author: 'Machado de Assis',
//     publisher:{
//         name: 'saraiva'
//     }
// };

// const { name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName);

const menu = [' Ice Tea', 'R$ 5,00', 'R$ 6,00', 'R$ 9,00'];

const [ product, , precoM ] = menu;

console.log(`O preço do ${product} é ${precoM}`);