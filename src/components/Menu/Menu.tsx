import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'

export function Menu() {
	return (
		<nav className={styles.nav}>
			<Link className={styles.button} to='/TG-mini-app/'>
				Websocket
			</Link>
			<Link className={styles.button} to='/TG-mini-app/weather'>
				Weather
			</Link>
			<Link className={styles.button} to='/TG-mini-app/infiniteScroll'>
				InfiniteScroll
			</Link>
		</nav>
	)
}
