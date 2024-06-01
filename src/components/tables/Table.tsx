import React, { useMemo, useEffect, useState } from 'react'
import axios from 'axios'
import MUIDataTable, {
  MUIDataTableColumn,
  MUIDataTableOptions,
  MUIDataTableState,
  MUIDataTableBody
} from 'mui-datatables'
import { useDebounce } from 'hooks/useDebounce'
import { LoadingTableBody } from './LoadingTableBody'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

interface DataTableProps {
  url: string
  columns: MUIDataTableColumn[]
}

interface ApiResponse {
  data: any[]
  total: number
}

const DataTable: React.FC<DataTableProps> = ({ url, columns }) => {
  const [data, setData] = useState<any[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortField, setSortField] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null)

  const debouncedSearchQuery = useDebounce(searchQuery, 500)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get<ApiResponse>(url, {
          params: {
            page: page,
            size: rowsPerPage,
            sortBy: sortField,
            sortOrder: sortOrder,
            keyword: searchQuery,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        })
        console.log(response.data)
        setData(response.data.data) 
        setTotal(response.data.total)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [page, rowsPerPage, debouncedSearchQuery, sortField, sortOrder])

  const BodyComponent = useMemo(
    () => (props: MUIDataTableBody) =>
      <LoadingTableBody loading={loading} {...props} />,
    [loading]
  )

  const options: MUIDataTableOptions = {
    serverSide: true,
    selectableRows: 'none' as const,
    rowsPerPageOptions: [10, 25, 50],
    filter: false,
    filterType: 'checkbox',
    responsive: 'standard',
    count: total, 
    onTableChange: (action, tableState: MUIDataTableState) => {
      switch (action) {
        case 'changePage':
          setPage(tableState.page)
          break
        case 'changeRowsPerPage':
          setPage(0)
          setRowsPerPage(tableState.rowsPerPage)
          break
        case 'search':
          setSearchQuery(tableState.searchText || '')
          setPage(0)
          break
        default:
          break
      }
    },
    onColumnSortChange: (changedColumn: string, direction: string) => {
      let newSortField: string | null = null
      let newSortOrder: 'asc' | 'desc' | null = null

      if (direction !== 'none') {
        newSortField = changedColumn
        newSortOrder = direction as 'asc' | 'desc'
      }

      setSortField(newSortField)
      setSortOrder(newSortOrder)
      setPage(0)
    },
    
  }

  return (
    <MUIDataTable
      title={'Employee List'}
      data={data}
      columns={columns}
      options={options}
      components={{ TableBody: BodyComponent }}
    />
  )
}

export default DataTable
