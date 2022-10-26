
// .then((message) => {
//     // code x
//     console.log(message);
//     return "night ride";
//     // return "hill station";
//     // return "treking";
//   })
//   .then((param) => {
//       // code x
//       console.log(param);
//       return "icecream";
//       // return "soup";
// // return "coconut water";
// })
// .then((param_1) => {
// // code x
// console.log(param_1);
// return "bike";
// // return "car";
// // return "cycle";
// })
// .catch((error) => {
// console.log(error.name + ' ' + error.message);
// });
// // promise
// // place (waterpark, hotel, )
// // treat food (burger, lunch / dinner, )
// // party (dance, music )

const result = fetch('https://reqres.in/api/users');
console.log(result);
fetch('https://reqres.in/api/users')
.then((response) => {
console.log(response);
// const final_response = response.json();
// console.log(final_response);
return response.json();
})
.then((data) => {
console.log(data);
})
// json datatype
// convert response ka datatype to json then we will be able
//to see real data
fetch('https://reqres.in/api/users')
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log('ERROR'));
// ek line + curly brackets nahi likhe
// ek line function ki body mai then u can avoid curly
brackets
function add(a, b){
return a + b
}
fetch('https://reqres.in/api/users')
.then(res => {
if(res.ok === true){
console.log('ORDER SUCCESSFUL');
} else {
console.log('ORDER WAS NOT SUCCESSFUL');
}
return res.json();
})
.then(data => console.log(data))

