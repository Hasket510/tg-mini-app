const cities = ['Tokyo', 'Moscow', 'London', 'Shanghai', 'Paris']

const getRandomCity = (cities: string[]) =>
	cities[Math.floor(Math.random() * cities.length)]

export const city = getRandomCity(cities)
