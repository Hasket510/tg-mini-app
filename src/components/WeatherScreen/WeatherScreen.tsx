import { useWeatherData } from '../../hooks/useWeatherData'

export function WeatherScreen() {
	const [data] = useWeatherData()

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
