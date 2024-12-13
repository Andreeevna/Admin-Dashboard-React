import { configureStore } from '@reduxjs/toolkit'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import globalReducer from '../src/state'
import App from './App.jsx'
import './index.css'

const store = configureStore({
	reducer: {
		global: globalReducer,
	},
})

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
)
