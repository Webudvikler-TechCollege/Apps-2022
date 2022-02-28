enum Role { ADMIN = 1, READ_ONLY, AUTHOR}

const person: {
	name: string; // String
	age: number; // Number
	hobbies: string[]; // Array of strings
	address: [string, number]; // Tuble - strict array
	role: Role, // Role enum 1,2 or 3
	dashboard: any // Anything
} = {
	name: "Tim",
	age: 65,
	hobbies: ['HTML', 'CSS'],
	address: ['Testvej', 3],
	role: Role.ADMIN,
	dashboard: [100, 'NemID', false, { id: 33 }]
}

console.log(person);

//person.role = [3, 'admin', 'user'] => Error

for(let hobby of person.hobbies) {
	console.log(hobby.toLocaleUpperCase());
	//console.log(hobby.map())
}

