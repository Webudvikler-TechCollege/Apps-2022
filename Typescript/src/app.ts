let userInput: unknown;
let userName: string;

userInput = 5;
//userName = userInput
if (typeof userInput === "string") {
  userName = userInput;
}

const generateError = (message: string, code: number): never => {
	throw { message: message, errorCode: code }
}

const result = generateError('Der er sket en fejl!', 500);
console.log(result);