import {
	display,
	defaultDisplayState,
	buttons,
	handleButtonClick,
	handleKeyboardInput,
} from "./calculator";
import {
	getThemeElements,
	handleThemeSwitch,
	initializeThemeState,
} from "./theme";

function runCalculator(): void {
	display.value = defaultDisplayState;
	buttons.forEach((button: HTMLButtonElement) => {
		const buttonValue: string = button.textContent ?? "";
		button.addEventListener("click", () => handleButtonClick(buttonValue));
	});
	document.addEventListener("keydown", (key: KeyboardEvent) => handleKeyboardInput(key));
}

function runThemes(): void {
	initializeThemeState();
	getThemeElements().forEach((element) => {
		element.addEventListener("click", handleThemeSwitch);
	});
}

function init() {
	document.addEventListener("DOMContentLoaded", () => {
		runCalculator();
		runThemes();
	});
}

init();
