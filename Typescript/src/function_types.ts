// Function with a return type
const add = (num1:number, num2:number): number => {
	return num1 + num2
}

// Function without a return type: void
const log = (num1: number): void => {
	console.log(`Result: ${num1}`);	
}

let combine: (a: number, b: number) => number; // Function type

combine = add;
// combine = log;

console.log(combine(5,6))

// Function withb callback
const addAndHandle = (num1: number, num2: number, cb: (result:number) => void) => {
	const result = num1 + num2;
	cb(result)
}

addAndHandle(10,20, (result) => {
	console.log(result);	
})