import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'

export function Menu() {
	return (
		<nav className={styles.nav}>
			<Link className={styles.button} to='/'>
				Websocket
			</Link>
			<Link className={styles.button} to='/weather'>
				Weather
			</Link>
			<Link className={styles.button} to='/infiniteScroll'>
				InfiniteScroll
			</Link>
		</nav>
	)
}
