import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { themeSettings } from './theme'

function App() {
	const mode = useSelector(state => state.global.mode)

	const theme = useMemo(() => {
		return createTheme(themeSettings(mode))
	}, [mode])
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
		</ThemeProvider>
	)
}

export default App
