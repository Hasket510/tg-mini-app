import axios from 'axios'
import { useEffect, useState } from 'react'

interface IWeatherData {
	name: string
	main: {
		temp: string
	}
}

export function useWeatherData(city: string) {
	const API_KEY = '046dbace766fa421a5c7d64b7c85e017'

	const [data, setData] = useState<IWeatherData>()

	useEffect(() => {
		if (!city) return

		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}
`
			)
			.then(resp => {
				const weatherData = resp.data
				setData(weatherData)
			})
	}, [city])

	return [data]
}
