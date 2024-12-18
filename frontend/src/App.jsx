import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Customers from './scenes/customers'
import Dashboard from './scenes/dashboard'
import Layout from './scenes/layout'
import Products from './scenes/products'
import { themeSettings } from './theme'

function App() {
	const mode = useSelector(state => state.global.mode)

	const theme = useMemo(() => {
		return createTheme(themeSettings(mode))
	}, [mode])

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Routes>
					<Route element={<Layout />}>
						<Route path='/' element={<Navigate to='/dashboard' replace />} />
						<Route path='/dashboard' element={<Dashboard />}></Route>
						<Route path='/products' element={<Products />}></Route>
						<Route path='/customers' element={<Customers />}></Route>
					</Route>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
