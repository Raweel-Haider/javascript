// const map = new Map();

// map.set('key1', 'value1');
// map.set('key2', 'value2');

// console.log(map.get('key1')); // Output: value1
// console.log(map.has('key2')); // Output: true


// map.set('pkr', 'Pakistan');
// map.set('ind', 'India');
// map.set('usa', 'United States');

// for (const [code, country] of map) {
//   console.log(`${code}: ${country}`);
// }


//for in

// const user = {
//     'js': 'JavaScript',
//     'py': 'Python',
//     'rb': 'Ruby'
// };

// for (const key in user) {
//     // console.log(`${user}`)
//     console.log(`${key}: ${user[key]}`);
// }







//////////////////////////practice ////////////////////////////

// const books = [
//   { title: 'Book One', genre: 'Fiction', publish: 1981,
//     edition: 2004 },
//   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
//     edition: 2008 },
//   { title: 'Book Three', genre: 'History', publish: 1999,
//     edition: 2007 },
//   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
//     edition: 2010 },
//   { title: 'Book Five', genre: 'Science', publish: 2009,
//     edition: 2014 },
//   { title: 'Book Six', genre: 'Fiction', publish: 1987,
//     edition: 2010 },
//   { title: 'Book Seven', genre: 'History', publish: 1986,
//     edition: 1996 },
//   { title: 'Book Eight', genre: 'Science', publish: 2011,
//     edition: 2016 },
//   { title: 'Book Nine', genre: 'Fiction', publish: 1981,
//     edition: 1989 },
// ];

// // const userbook = books.filter ((bk)=> bk.genre === 'History')
// const userbook = books.filter ((bk)=> bk.publish >= 2000 && bk.genre === 'Science')
// console.log(userbook)




/////////////////////////////////////////////////////////////////////////

// const mynumber = [1,2,3,4,5,6,7,8,9,10];

// //chaining map and filter
// const newnumber = mynumber.map((num) => num * 2 ).map((num) => num + 1).filter((num) => num > 10);
// console.log(newnumber);


///////reduce //////////////////////

const mynumber = [1,2,3];

const mytotal = mynumber.reduce((accumulator, currentvalue) => {
    console.log(`accumulator = ${accumulator}, currentValue = ${currentvalue}`)
    return accumulator + currentvalue
},0);

console.log(mytotal);