import { Box, useMediaQuery } from '@mui/material'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const Layout = () => {
	const isNoMobile = useMediaQuery('(min-width:600px)')

	const [isSidebarOpen, setIsSidebarOpen] = useState(true)

	return (
		<Box display={isNoMobile ? 'flex' : 'block'} width='100%' height='100%'>
			<Sidebar
				isNoMobile={isNoMobile}
				drawerWidth='250px'
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
			/>
			<Box flexGrow={1}>
				<Navbar
					isSidebarOpen={isSidebarOpen}
					setIsSidebarOpen={setIsSidebarOpen}
				/>
				<Outlet />
			</Box>
			Layout
		</Box>
	)
}

export default Layout
