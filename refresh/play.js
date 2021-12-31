const name = 'Max'
let age = 29
let hasHobbies = true

age = 30

const summarizeUser = (userName, userAge, userHasHobby) => {
	return (
		'Name is ' +
		userName +
		', age is ' +
		userAge +
		' and the user has hobbies: ' +
		userHasHobby
	)
}

// const add = (a, b) => {
// 	return a + b
// }

// const add = (a, b) => a + b
// const addOne = (a) => a + 1
const addRandom = () => 1 + 2

/*
const summarizeUser = function (userName, userAge, userHasHobby) {
	return (
		'Name is ' +
		userName +
		', age is ' +
		userAge +
		' and the user has hobbies: ' +
		userHasHobby
	)
}
*/
/*
function summarizeUser(userName, userAge, userHasHobby) {
	return (
		'Name is ' +
		userName +
		', age is ' +
		userAge +
		' and the user has hobbies: ' +
		userHasHobby
	)
}

*/

// console.log(add(1, 2))
// console.log(addOne(1))
console.log(addRandom())

console.log(summarizeUser(name, age, hasHobbies))
