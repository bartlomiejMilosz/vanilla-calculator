const themeOptions: NodeListOf<HTMLUListElement> = document.querySelectorAll(
	".heading__theme-option",
);
const switchContainer: HTMLDivElement | null = document.querySelector(
	".heading__theme-switch",
);
const switchBall: HTMLDivElement | null = document.querySelector(
	".theme-switch__ball",
);

export let themeLevel: number = 0;
export const themes: string[] = ["theme-dark", "theme-light", "theme-neon"];

export function getThemeElements(): (HTMLUListElement | HTMLDivElement)[] {
	const elementsToAttach: (HTMLUListElement | HTMLDivElement)[] =
		Array.from(themeOptions);

	if (switchContainer) {
		elementsToAttach.push(switchContainer);
	}
	return elementsToAttach;
}

function updateSwitchBallPosition(): void {
	if (!switchBall || !switchContainer) return;

	const ballWidth: number = switchBall.offsetWidth;
	const space: number = 5;
	switch (themeLevel) {
		case 0:
			switchBall.style.left = `${space}px`;
			break;
		case 1:
			switchBall.style.left = `calc(50% - ${ballWidth / 2}px)`;
			break;
		case 2:
			switchBall.style.left = `calc(100% - ${ballWidth}px - ${space}px)`;
			break;
	}
}

function applyTheme(): void {
	document.body.classList.remove(...themes);
	document.body.classList.add(themes[themeLevel]);
	if (themes[themeLevel] === "theme-dark") {
		handleDarkTheme();
	} else if (themes[themeLevel] === "theme-light") {
		handleLightTheme();
	} else {
		handleNeonTheme();
	}
}

function handleDarkTheme() {
	const display: HTMLInputElement | null = document.querySelector(".display");
	const heading: HTMLDivElement | null = document.querySelector(".heading");
	const buttons: NodeListOf<HTMLButtonElement> =
		document.querySelectorAll(".btn-functional");

	buttons.forEach((button) => {
		button.style.removeProperty("color");
	});
	display?.style.removeProperty("color");
	heading?.style.removeProperty("color");
}

function handleLightTheme() {
	const display: HTMLInputElement | null = document.querySelector(".display");
	const heading: HTMLDivElement | null = document.querySelector(".heading");
	const buttons: NodeListOf<HTMLButtonElement> =
		document.querySelectorAll(".btn-functional");

	buttons.forEach((button) => {
		button.style.removeProperty("color");
	});

	display?.style.setProperty("color", "var(--text-primary)");
	heading?.style.setProperty("color", "var(--text-primary)");
}

function handleNeonTheme() {
	const buttons: NodeListOf<HTMLButtonElement> =
		document.querySelectorAll(".btn-functional");
	buttons.forEach((button) => {
		button.style.setProperty("color", "var(--text-white)");
	});
}

export function handleThemeSwitch(): void {
	themeLevel = (themeLevel + 1) % themes.length;
	updateSwitchBallPosition();
	applyTheme();
}

export function initializeThemeState(): void {
	applyTheme();
	updateSwitchBallPosition();
}
