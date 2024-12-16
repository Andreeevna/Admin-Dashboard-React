import {
	AdminPanelSettingsOutlined,
	CalendarMonthOutlined,
	ChevronLeft,
	Groups2Outlined,
	HomeOutlined,
	PieChartOutlined,
	PointOfSaleOutlined,
	PublicOutlined,
	ReceiptLongOutlined,
	ShoppingCartOutlined,
	TodayOutlined,
	TrendingUpOutlined,
} from '@mui/icons-material'
import { Box, Drawer, IconButton, Typography, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import FlexBetween from '../FlexBetween'

const navItems = [
	{
		text: 'Dashboard',
		icon: <HomeOutlined />,
	},
	{
		text: 'Client Facing',
		icon: null,
	},
	{
		text: 'Products',
		icon: <ShoppingCartOutlined />,
	},
	{
		text: 'Customers',
		icon: <Groups2Outlined />,
	},
	{
		text: 'Transactions',
		icon: <ReceiptLongOutlined />,
	},
	{
		text: 'Geography',
		icon: <PublicOutlined />,
	},
	{
		text: 'Sales',
		icon: null,
	},
	{
		text: 'Overview',
		icon: <PointOfSaleOutlined />,
	},
	{
		text: 'Daily',
		icon: <TodayOutlined />,
	},
	{
		text: 'Monthly',
		icon: <CalendarMonthOutlined />,
	},
	{
		text: 'Breakdown',
		icon: <PieChartOutlined />,
	},
	{
		text: 'Management',
		icon: null,
	},
	{
		text: 'Admin',
		icon: <AdminPanelSettingsOutlined />,
	},
	{
		text: 'Performance',
		icon: <TrendingUpOutlined />,
	},
]

const Sidebar = ({
	isNoMobile,
	drawerWidth,
	isSidebarOpen,
	setIsSidebarOpen,
}) => {
	const { pathName } = useLocation()
	console.log(pathName)
	const navigate = useNavigate()
	const theme = useTheme()

	const [active, setActive] = useState('')

	useEffect(() => {
		setActive(pathName?.substring(1))
	}, [pathName])

	return (
		<Box component='nav'>
			{isSidebarOpen && (
				<Drawer
					open={isSidebarOpen}
					onClose={() => setIsSidebarOpen(false)}
					variant='persistent'
					anchor='left'
					sx={{
						width: drawerWidth,
						'& .MuiDrawer-paper': {
							color: theme.palette.secondary[200],
							backgroundColor: theme.palette.background.alt,
							boxSizing: 'border-box',
							borderWidth: isNoMobile ? 0 : '2px',
							width: drawerWidth,
						},
					}}
				>
					<Box width='100%'>
						<Box m='1.5rem 2rem 2rem 3rem'>
							<FlexBetween color={theme.palette.secondary.main}>
								<Box display='flex' alignItems='center' gap='0.5rem'>
									<Typography variant='h4' fontWeight='bold'>
										ECOMVISION
									</Typography>
								</Box>
								{isNoMobile && (
									<IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
										<ChevronLeft />
									</IconButton>
								)}
							</FlexBetween>
						</Box>
						<List></List>
					</Box>
				</Drawer>
			)}
			fvfvfvfv
		</Box>
	)
}

export default Sidebar
