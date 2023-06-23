'use client';

import { MRT_ColumnDef, MaterialReactTable } from 'material-react-table'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useMemo } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Tooltip, Legend, Bar, ComposedChart, Area, PieChart, Pie } from 'recharts';
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  VisualMapComponent,
  VisualMapComponentOption
} from 'echarts/components';
import { HeatmapChart, HeatmapSeriesOption } from 'echarts/charts';
import { SVGRenderer } from 'echarts/renderers';

// interface Person {
//   name: string;
//   age: number;
//   budget: number;
// }



// const gridData: Person[] = [
//   {
//     name: 'John',
//     age: 30,
//     budget: 5000
//   },
//   {
//     name: 'Sara',
//     age: 22,
//     budget: 6000
//   },
//   {
//     name: 'David',
//     age: 60,
//     budget: 25000
//   },
//   {
//     name: 'Wine',
//     age: 42,
//     budget: 100000
//   },
//   {
//     name: 'Mom',
//     age: 64,
//     budget: 60000
//   },
//   {
//     name: 'Father',
//     age: 76,
//     budget: 55000
//   },
//   {
//     name: 'Filp',
//     age: 33,
//     budget: 333
//   },
//   {
//     name: 'Lime',
//     age: 22,
//     budget: 2222
//   },
//   {
//     name: 'Ten',
//     age: 10,
//     budget: 1000
//   },

// ];


export default function Home() {

  // grid
  // const columns = useMemo<MRT_ColumnDef<Person>[]>( 
  //   () => [
  //     {
  //       accessorKey: 'name',
  //       header: 'Name',
  //       muiTableHeadCellProps: { sx: { color: 'green' } },
  //     },
  //     {
  //       accessorFn: (originalRow) => originalRow.age,
  //       id: 'age',
  //       header: 'Age',
  //       Header: <i style={{ color: 'red' }}>Age</i>,
  //     },
  //     {
  //       accessorFn: (originalRow) => originalRow.budget,
  //       id: 'budget',
  //       header: 'Budget',
  //       Header: <i style={{ color: 'blue' }}>Budget</i>,
  //     }
  //   ],
  //   [],
  // );

  // rechart
  //   const chartData = [
  //     {name: ' A', uv: 400, pv: 2400, amt: 1400},
  //     {name: ' B', uv: 600, pv: 1500, amt: 6400},
  //     {name: ' C', uv: 800, pv: 2000, amt: 5400},
  //     {name: ' D', uv: 100, pv: 1000, amt: 8400},
  //     {name: ' E', uv: 400, pv: 1400, amt: 900},
  //     {name: ' F', uv: 500, pv: 8400, amt: 1000},
  //     {name: ' G', uv: 200, pv: 2400, amt: 800},
  //     {name: ' H', uv: 900, pv: 12400, amt: 3000},
  //     {name: ' I', uv: 300, pv: 400, amt: 300},
  //     {name: ' J', uv: 100, pv: 100, amt: 400},
  //   ]


  // echart
  type EchartsOption = echarts.ComposeOption<
  | TooltipComponentOption
  | GridComponentOption
  | VisualMapComponentOption
  | HeatmapSeriesOption
>;

  // const chartDom = document.getElementById('main');
  // const myChart = echarts.init(chartDom, null, {
  //   renderer: 'svg'
  // });
  // const option: EchartsOption;
  const d = document;
  const rootNode = d.getRootNode
  const rootDom = d.getElementsByClassName("root");
  

  return (
    <div>

       {rootDom ? `rootDom: ${rootDom}` : "존재 X"}
       {rootNode ? `rootNode: ${rootNode}` : "존재 X"}



      {/* 
      <ComposedChart width={730} height={250} data={chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart> */}

      {/* 
      <MaterialReactTable
        columns={columns}
        data={gridData}
        enableRowSelection
        enableColumnOrdering
        enableGlobalFilter={false}/> */}
    </div>
  )
}
