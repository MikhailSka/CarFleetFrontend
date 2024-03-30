import DataTable from 'components/tables/Table'
import React from 'react'
import { MUIDataTableColumn } from 'mui-datatables'

const HomePage: React.FC = () => {
  const columns: MUIDataTableColumn[] = [
    {
      name: 'id',
      label: 'ID',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'make',
      label: 'Make',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'model',
      label: 'Model',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'year',
      label: 'Year',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'registrationNumber',
      label: 'Registration Number',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'status',
      label: 'Status',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'distance',
      label: 'Distance',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'minuteCost',
      label: 'Minute Cost',
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          // Assuming you want to format the BigDecimal values for display
          return value ? `$${value.toFixed(2)}` : ''
        },
      },
    },
    {
      name: 'kilometerCost',
      label: 'Kilometer Cost',
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          // Format BigDecimal values for display
          return value ? `$${value.toFixed(2)}` : ''
        },
      },
    },
  ]
 console.log("cos")
  return (
    <div>
      <h1>Home Page</h1>
      <DataTable url="http://localhost:8080/api/cars" columns={columns} />
    </div>
  )
}

export default HomePage
