import { Search } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import {
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarDensitySelector,
	GridToolbarExport,
} from '@mui/x-data-grid'
import FlexBetween from '../FlexBetween'

const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
	console.log('Rendering Toolbar')

	return (
		<GridToolbarContainer>
			<FlexBetween width='100%'>
				<FlexBetween>
					<GridToolbarColumnsButton />
					<GridToolbarDensitySelector />
					<GridToolbarExport />
				</FlexBetween>
				<TextField
					label='Search...'
					sx={{ mb: '0.5rem', width: '15rem' }}
					onChange={e => setSearchInput(e.target.value)}
					value={searchInput}
					variant='standard'
					slots={{
						endAdornment: (
							<InputAdornment position='end'>
								<IconButton
									onClick={() => {
										setSearch(searchInput)
										setSearchInput('')
									}}
								>
									<Search />
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</FlexBetween>
		</GridToolbarContainer>
	)
}

export default DataGridCustomToolbar
