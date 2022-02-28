const displayValues = (
  num1: number,
  num2: number,
  displayResult: boolean,
  displayText: string
) => {
	const add = num1 + num2
	return (displayResult) ? 
  		`${displayText}: ${add}` : add;
	
};

const n1 = 3;
const n2 = 12;
const displayResult = false
const displayText = 'Resultat: '
const myResult = displayValues(n1, n2, displayResult, displayText);
console.log(myResult);


