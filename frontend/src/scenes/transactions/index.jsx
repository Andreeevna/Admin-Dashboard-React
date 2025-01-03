import { Box, Stack, TextField, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import DataGridCustomToolbar from '../../components/DataGridCustomToolbar/DataGridCustomToolbar'
import Header from '../../components/Header'
import { useGetTransactionsQuery } from '../../state/api'

const Transactions = () => {
	const theme = useTheme()

	const [page, setPage] = useState(0)
	const [pageSize, setPageSize] = useState(20)
	const [sort, setSort] = useState({})
	const [search, setSearch] = useState('')

	const [searchInput, setSearchInput] = useState('')
	const { data, isLoading } = useGetTransactionsQuery({
		page,
		pageSize,
		sort: JSON.stringify(sort),
		search,
	})

	const columns = [
		{
			field: '_id',
			headerName: 'ID',
			flex: 1,
		},
		{
			field: 'userId',
			headerName: 'User ID',
			flex: 1,
		},
		{
			field: 'createdAt',
			headerName: 'CreatedAt',
			flex: 1,
		},
		{
			field: 'products',
			headerName: '# of Products',
			flex: 0.5,
			sortable: false,
			renderCell: params => params.value.length,
		},
		{
			field: 'cost',
			headerName: 'Cost',
			flex: 1,
			renderCell: params => `$${Number(params.value).toFixed(2)}`,
		},
	]
	// console.log(searchInput)

	// const filteredRows1 = useMemo(() => {
	// 	return userRows?.filter(row => {
	// 		return Object.entries(row).every(([key, value]) => {
	// 			if (!filterValues[key]) {
	// 				return true
	// 			}
	// 			return value?.toString()?.toLowerCase()?.includes(filterValues[key])
	// 		})
	// 	})
	// }, [filterValues, userRows])

	const filteredRows = () => {
		if (!data) return
		const normalizedSearchInput = searchInput?.toString().toLowerCase()

		return data?.transactions.filter(row => {
			return Object.entries(row).some(([key, value]) => {
				if (Array.isArray(value)) {
					return value.some(el =>
						el?.toString()?.toLowerCase().includes(normalizedSearchInput)
					)
				}

				return value?.toString()?.toLowerCase().includes(normalizedSearchInput)
			})
		})
	}

	console.log(filteredRows())

	return (
		<Box m='1.5rem 2.5rem'>
			<Header title='TRANSACTIONS' subtitle='Entire list of transactions' />
			<Box display='flex' justifyContent={'right'}>
				<Stack spacing={2} sx={{ width: 300 }}>
					{/* <Autocomplete
					renderInput={params => <TextField {...params} label='search' />}
				/> */}
					<TextField
						label='search'
						onInput={event => setSearchInput(event.target.value)}
					/>
				</Stack>
			</Box>

			<Box
				mt='40px'
				height='80vh'
				sx={{
					'& .MuiDataGrid-root': {
						border: 'none',
					},
					'& .MuiDataGrid-cell': {
						borderBottom: 'none',
					},
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: theme.palette.background.alt,
						color: theme.palette.secondary[100],
						borderBottom: 'none',
					},
					'& .MuiDataGrid-virtualScroller': {
						backgroundColor: theme.palette.primary.light,
					},
					'& .MuiDataGrid-footerContainer': {
						backgroundColor: theme.palette.background.alt,
						color: theme.palette.secondary[100],
						borderTop: 'none',
					},
					'& .MuiDataGrid-toolbarContainer .MuiButton-text': {
						color: `${theme.palette.secondary[200]} !important`,
					},
				}}
			>
				<DataGrid
					loading={isLoading || !data}
					getRowId={row => row._id}
					rows={filteredRows()}
					columns={columns}
					rowCount={(data && data.total) || 0}
					rowsPerPageOptions={[20, 50, 100]}
					pagination
					page={page}
					pageSize={pageSize}
					paginationMode='server'
					sortingMode='server'
					onPageChange={newPage => setPage(newPage)}
					onPageSizeChange={newPageSize => setPageSize(newPageSize)}
					onSortModelChange={newSortModel => setSort(...newSortModel)}
					components={{
						Toolbar: DataGridCustomToolbar,
					}}
					componentsProps={{
						toolbar: {
							searchInput,
							setSearchInput,
							setSearch,
						},
					}}
				/>
			</Box>
		</Box>
	)
}

export default Transactions
