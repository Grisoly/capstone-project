const generateFakeAPI = (date) => {
	const availableTimes = [];
	const randomSeed = date.getDate() * 123;

	const seededRandom = (seed) => {
		const m = 2 ** 35 - 31;
		const a = 185852;
		let s = seed % m;

		return () => (s = (s * a) % m) / m;
	};

	let random = seededRandom(randomSeed);

	for (let hour = 17; hour <= 22; hour++) {
		availableTimes.push(`${hour}:00`);
	}

	return availableTimes;
};

export { generateFakeAPI };
