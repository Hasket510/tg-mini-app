import axios from 'axios'
import { useEffect, useState } from 'react'
import { city } from '../utils/getRandomCity'

interface IWeatherData {
	name: string
	main: {
		temp: string
	}
}

export function useWeatherData() {
	const API_KEY = '046dbace766fa421a5c7d64b7c85e017'

	const [data, setData] = useState<IWeatherData>()

	useEffect(() => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}
`
			)
			.then(resp => {
				const weatherData = resp.data
				console.log(weatherData)
				setData(weatherData)
			})
	}, [])

	return [data]
}
