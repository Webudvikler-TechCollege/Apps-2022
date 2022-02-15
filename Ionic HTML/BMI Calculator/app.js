const calculateBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');
const resultWrapper = document.getElementById('result');

const resetInputs = () => {
    heightInput.value = '';
    weightInput.value = '';
}

const calculateBmi = () => {
    const enteredHeight = +heightInput.value;
    const enteredWeight = +weightInput.value;

    const bmi = enteredWeight / (enteredHeight * enteredHeight);

    if(isNaN(bmi)) {
        return false;
    }
    const resultElement = document.createElement('ion-card');
    resultElement.innerHTML = `
        <ion-card-content>
            <h2>${bmi}</h2>
        </ion-card-content>
    `;
    resultWrapper.appendChild(resultElement);
}
calculateBtn.addEventListener('click', calculateBmi);
resetBtn.addEventListener('click', resetInputs);