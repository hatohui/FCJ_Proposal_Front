import { useEffect } from 'react'
import { useGameStore } from '../../stores/useGameStore.ts'

const Page = () => {
	const { connect } = useGameStore()

	useEffect(() => {
		connect()
	}, [])

	return <div>This is game room</div>
}

export default Page
