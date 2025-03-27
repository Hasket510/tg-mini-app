const cities = ['Tokyo', 'Moscow', 'London', 'Shanghai', 'Paris']

export const getRandomCity = () =>
	cities[Math.floor(Math.random() * cities.length)]
