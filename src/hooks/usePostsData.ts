import axios from 'axios'
import { useCallback, useState } from 'react'

interface IPost {
	id: number
	title: string
	body: string
}

export function usePostsData(): [IPost[], boolean, () => void] {
	const [posts, setPosts] = useState<IPost[]>([])
	const [isLoading, setIsLoading] = useState(false)

	const fetchPosts = useCallback(async () => {
		setIsLoading(true)
		try {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/posts?_limit=2'
			)

			setPosts(prevPosts => [...prevPosts, ...response.data])
		} catch (error) {
			console.error('Error fetching posts:', error)
		} finally {
			setIsLoading(false)
		}
	}, [])
	return [posts, isLoading, fetchPosts]
}
