import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import { InfiniteScrollScreen } from './components/InfiniteScrollScreen/InfiniteScrollScreen'
import { Menu } from './components/Menu/Menu'
import { WeatherScreen } from './components/WeatherScreen/WeatherScreen'
import { WebSocketScreen } from './components/WebSocketScreen/WebSocketScreen'

function App() {
	return (
		<main className={styles.app}>
			<Routes>
				<Route path='/' element={<WebSocketScreen />} />
				<Route path='/weather' element={<WeatherScreen />} />
				<Route path='/infiniteScroll' element={<InfiniteScrollScreen />} />
			</Routes>
			<Menu />
		</main>
	)
}

export default App
