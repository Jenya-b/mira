export const getRandomElements = (arr: string[], num: number): string[] => {
	const result = [];
	const copyArray = [...arr];

	for (let i = 0; i < num; i++) {
		if (copyArray.length === 0) {
			break;
		}

		const randomIndex = Math.floor(Math.random() * copyArray.length);
		const [removedElement] = copyArray.splice(randomIndex, 1);
		result.push(removedElement);
	}

	return result;
};
