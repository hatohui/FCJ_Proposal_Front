import React from 'react'

const MainLayout = ({
	children,
}: {
	children: React.ReactNode
}): React.ReactNode => {
	return (
		<div>
			<div>Main Layout</div>
			<div>{children}</div>
		</div>
	)
}

export default MainLayout
