// Working with Objects, Properties & Methods

const person = {
	name: 'Max',
	age: 29,
	greet() {
		console.log('Hi, I am ' + this.name)
	},
}

// console.log(person)

person.greet()

const copiedPerson = { ...person }
console.log(copiedPerson)

const hobbies = ['Sports', 'Cooking']
// for (let hobby of hobbies) {
// 	console.log(hobby)
// }

// console.log(
// 	hobbies.map((hobby) => {
// 		return 'Hobby:' + hobby
// 	})
// )

// console.log(hobbies.map((hobby) => 'Hobby: ' + hobby))
// console.log(hobbies)
// hobbies.push('Programming')
// const copiedArray = hobbies.slice()
const copiedArray = [...hobbies]
// console.log(hobbies)
console.log(copiedArray)

// const toArray = (arg1, arg2, arg3) => {
// 	return [arg1, arg2, arg3]
// }

const toArray = (...args) => {
	return args
}

console.log(toArray(1, 2, 3, 4))
