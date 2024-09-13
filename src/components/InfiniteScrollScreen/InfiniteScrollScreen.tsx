import { useCallback, useEffect, useState } from 'react'
import styles from './InfiniteScrollScreen.module.scss'

interface IPost {
	id: number
	title: string
	body: string
}

export function InfiniteScrollScreen() {
	const [posts, setPosts] = useState<IPost[]>([])
	const [loading, setLoading] = useState(false)

	const fetchPosts = useCallback(async () => {
		setLoading(true)
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/posts?_limit=2'
			)
			const data = await response.json()

			setPosts(prevPosts => [...prevPosts, ...data])
		} catch (error) {
			console.error('Error fetching posts:', error)
		} finally {
			setLoading(false)
		}
	}, [])

	useEffect(() => {
		fetchPosts()
	}, [fetchPosts])

	const handleLoadMore = useCallback(() => {
		if (loading) return

		fetchPosts()
	}, [loading, fetchPosts])

	return (
		<section>
			<h1>Infinite Scroll</h1>
			<ul className={styles.list}>
				{posts.map(post => (
					<li className={styles.post} key={post.id}>
						<h3 className={styles.postTitle}>{post.title}</h3>
						<p className={styles.postBody}>{post.body}</p>
					</li>
				))}
			</ul>

			{loading && <p>Loading...</p>}

			<button
				className={styles.button}
				onClick={handleLoadMore}
				disabled={loading}
			>
				{loading ? 'Loading more...' : 'Load More'}
			</button>
		</section>
	)
}
