//////////////////////////old
// const xhr = new XMLHttpRequest

// const requestURL = 'https://randomuser.me/api/'
// const requestURL2 = 'https://api.github.com/users/hiteshchoudhary'

// xhr.open('GET', requestURL2)
// xhr.onreadystatechange = function () {
//     console.log(xhr.readyState);
//     if (xhr.readyState === 4) {
//         const data = JSON.parse(this.responseText)
//         console.log(data.followers);
//     }
// }

// xhr.send()

/////////////////////////////////////////////////////////////////////////////////////////////////

// async function getAllUsers() {
//   try {
//     const response = await fetch(
//       'https://jsonplaceholder.typicode.com/users'
//     );

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }

// getAllUsers();

/////////////////////////////////////////////////////////////////////////////////////////////////

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log('E:', error));