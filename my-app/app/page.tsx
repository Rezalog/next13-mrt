'use client';

import { MRT_ColumnDef, MaterialReactTable } from 'material-react-table'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'


interface Person {
  name: string;
  age: number;
  budget: number;
}

const data: Person[] = [
  {
    name: 'John',
    age: 30,
    budget: 5000
  },
  {
    name: 'Sara',
    age: 22,
    budget: 6000
  },
  {
    name: 'David',
    age: 60,
    budget: 25000
  },
  {
    name: 'Wine',
    age: 42,
    budget: 100000
  },
  {
    name: 'Mom',
    age: 64,
    budget: 60000
  },
  {
    name: 'Father',
    age: 76,
    budget: 55000
  },
  {
    name: 'Filp',
    age: 33,
    budget: 333
  },
  {
    name: 'Lime',
    age: 22,
    budget: 2222
  },
  {
    name: 'Ten',
    age: 10,
    budget: 1000
  },

];


export default function Home() {

  const columns = useMemo<MRT_ColumnDef<Person>[]>( 
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        muiTableHeadCellProps: { sx: { color: 'green' } },
      },
      {
        accessorFn: (originalRow) => originalRow.age,
        id: 'age',
        header: 'Age',
        Header: <i style={{ color: 'red' }}>Age</i>,
      },
      {
        accessorFn: (originalRow) => originalRow.budget,
        id: 'budget',
        header: 'Budget',
        Header: <i style={{ color: 'blue' }}>Budget</i>,
      }
    ],
    [],
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableRowSelection
      enableColumnOrdering
      enableGlobalFilter={false}/>
  )
}
