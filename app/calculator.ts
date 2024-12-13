export const display: HTMLInputElement = document.querySelector(".display")!;
export const defaultDisplayState: string = "0";
export const buttons: NodeListOf<HTMLButtonElement> =
	document.querySelectorAll(".btn");
const operands: string[] = ["+", "-", "*", "/"];
let stateOfEqualOperator: boolean = false;

export function handleButtonClick(value: string): void {
	switch (value) {
		case "DEL":
			deleteLastCharacter();
			break;
		case "RESET":
			clearDisplay();
			break;
		case "=":
		case "Enter":
			evaluateExpression();
			break;
		default:
			updateDisplay(value);
			break;
	}
}

function updateDisplay(value: string): void {
	if (display.value === defaultDisplayState) {
		display.value = value;
		return;
	}
	if (stateOfEqualOperator && isOperand(value)) {
		stateOfEqualOperator = false;
		appendOrReplaceLastOperator(value);
	} else if (stateOfEqualOperator) {
		resetDisplay(value);
	} else {
		appendOrReplaceLastOperator(value);
	}
}

function appendOrReplaceLastOperator(value: string): void {
	const lastChar: string = display.value.slice(-1);
	if (isOperand(lastChar) && isOperand(value)) {
		replaceLastOperator(value);
	} else {
		display.value += value;
	}
}

function replaceLastOperator(value: string): void {
	display.value = display.value.slice(0, -1) + value;
}

function resetDisplay(value: string): void {
	if (!isOperand(value)) {
		display.value = value;
	} else {
		display.value += value;
	}
	stateOfEqualOperator = false;
}

function isOperand(value: string): boolean {
	return operands.includes(value);
}

function evaluateExpression(): void {
	if (display.value.includes("/0")) {
		display.value = "Cannot divide by 0";
		stateOfEqualOperator = true;
		return;
	}
	try {
		const result = eval(display.value);
		display.value = Number.isFinite(result) ? String(result) : "Error";
		display.value = result;
		stateOfEqualOperator = true;
	} catch (error) {
		display.value = "Error";
		stateOfEqualOperator = true;
	}
}

function clearDisplay(): void {
	display.value = "";
}

function deleteLastCharacter(): void {
	display.value = display.value.slice(0, -1);
}

export function handleKeyboardInput(event: KeyboardEvent): void {
	const key = event.key;
	if (/[\d+\-*/.=]/.test(key) || key === "Enter") {
		handleButtonClick(key);
	} else if (key === "Backspace") {
		deleteLastCharacter();
	} else if (key === "Escape") {
		clearDisplay();
	}
}
