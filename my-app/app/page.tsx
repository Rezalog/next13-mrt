'use client';

import { MRT_ColumnDef, MaterialReactTable } from 'material-react-table'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useMemo } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export function chart() {

    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

    const renderLineChart = (
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    );

    return (

        <div>
            { renderLineChart }
        </div>
    )
    
}


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
    <div>
      <div className='chart'>
        chart
      </div>

      <div className='grid'>
        <MaterialReactTable
          columns={columns}
          data={data}
          enableRowSelection
          enableColumnOrdering
          enableGlobalFilter={false}/>
      </div>

    </div>
  )
}
