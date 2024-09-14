import { useCallback, useEffect } from 'react'
import { usePostsData } from '../../hooks/usePostsData'
import styles from './InfiniteScrollScreen.module.scss'

export function InfiniteScrollScreen() {
	const [posts, isLoading, fetchPosts] = usePostsData()

	useEffect(() => {
		fetchPosts()
	}, [fetchPosts])

	const handleLoadMore = useCallback(() => {
		if (isLoading) return

		fetchPosts()
	}, [isLoading, fetchPosts])

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

			{isLoading && <p>Loading...</p>}

			<button
				className={styles.button}
				onClick={handleLoadMore}
				disabled={isLoading}
			>
				{isLoading ? 'Loading more...' : 'Load More'}
			</button>
		</section>
	)
}
