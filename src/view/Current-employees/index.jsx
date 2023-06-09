import React from 'react'
import Title from '../../components/common/Title'
import DataTable from 'react-data-table-component';

const columns = [
  {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
  },
  {
      name: 'Director',
      selector: row => row.director,
      sortable: true,
  },
  {
      name: 'Year',
      selector: row => row.year,
      sortable: true,
  },
];

const data = [
  {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
  },
  {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
  },
]

export default function CurrentEmployees() {
  return (
    <>
      <Title title="Current Employees"/>
      <DataTable title="Movie List" columns={columns} data={data} pagination />
    </>
    
  )
}
