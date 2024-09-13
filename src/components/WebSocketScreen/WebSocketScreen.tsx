import { useEffect, useState } from 'react'

export function WebSocketScreen() {
	const [message, setMessage] = useState('')

	useEffect(() => {
		const socket = new WebSocket('wss://echo.websocket.org')

		socket.onopen = () => {
			socket.send('App for telegram')
		}

		socket.onmessage = event => {
			setMessage(event.data)
		}

		return () => {
			socket.close()
		}
	}, [])

	return (
		<div>
			<h1>Welcome</h1>
			<p>{message}</p>
		</div>
	)
}
