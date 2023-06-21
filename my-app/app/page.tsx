import { MRT_ColumnDef, MaterialReactTable } from 'material-react-table'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

interface Person {
  name: string;
  age: number;
}

const data: Person[] = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Sara',
    age: 25,
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
