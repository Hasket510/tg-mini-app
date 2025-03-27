import { useEffect, useState } from 'react'
import { useWeatherData } from '../../hooks/useWeatherData'
import { getRandomCity } from '../../utils/getRandomCity'

export function WeatherScreen() {
	const [city, setCity] = useState(getRandomCity())
	const [data] = useWeatherData(city)

	useEffect(() => {
		setCity(getRandomCity())
	}, [])

	const calcTemp = (temp: string) => (Number(temp) - 273.15).toFixed(1)

	return (
		<section>
			<h1>Weather</h1>
			{data ? (
				<div>
					<p className='sectionWeather__text'>City: {data.name}</p>
					<p className='sectionWeather__text'>
						Temperature: {calcTemp(data.main.temp)}°C
					</p>
				</div>
			) : (
				<div>Loading...</div>
			)}
		</section>
	)
}
