'use client';

import { MRT_ColumnDef, MaterialReactTable } from 'material-react-table'
import Image from 'next/image'
import Link from 'next/link'
import { DOMAttributes, Fragment, KeyboardEventHandler, RefObject, useEffect, useMemo, useRef, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Tooltip, Legend, Bar, ComposedChart, Area, PieChart, Pie } from 'recharts';
// import * as echarts from 'echarts/core';
import ECharts, {EChartsReactProps} from 'echarts-for-react'
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
  
  const inputRef = useRef<HTMLInputElement>(null);
  // const chartRef = useRef(null);
  const [options, setOptions] = useState({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
	      type: 'line'
      }
    ],

  });

  // heatmapChartOption and other variables
  const data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]]
    .map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });
  const hours = [
    '12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a','10a','11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'
  ];
  const days = [
    'Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'
  ];

  const [heatmapChartOptions, setHeatmapChartOptions] = useState({
    tooltip: {
      position: 'top'
    },
    grid: {
      height: '50%',
      top: '10%'
    },
    xAxis: {
      type: 'category',
      data: hours,
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: days,
      splitArea: {
        show: true
      }
    },
    visualMap: {
      min: 0,
      max: 10,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '15%'
    },
    series: [
      {
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        label: {
          show: true
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  })

  const [text, setText] = useState<string[]>([]);

  // echart
  // type EchartsOption = echarts.ComposeOption<
  // | TooltipComponentOption
  // | GridComponentOption
  // | VisualMapComponentOption
  // | HeatmapSeriesOption
  // >;

  // const chartDom = document.getElementById('main');
  // const myChart = echarts.init(chartDom, null, {
  //   renderer: 'svg'
  // });
  // let option: EchartsOption;

 
  const handleClick = () => {

      console.log(text);

      if(text===null && inputRef.current !==null) {
        setText([inputRef.current.value])
        inputRef.current.value="";
        inputRef.current.focus();
      }

      if(inputRef.current) {
        setText([...text, inputRef.current.value]);
        inputRef.current.value="";
        inputRef.current.focus();
      } 
      
  }

  const handleEnterKeyDown = (e: KeyboardEvent) => {

    if(e.key==='Enter') {
      console.log(e);

      handleClick();
    }
    
  }


  const [bnlChartOptions, setBnlChartOptions] = useState({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['Evaporation', 'Precipitation', 'Temperature']
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Precipitation',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          type: 'value',
          name: 'Temperature',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ],
      series: [
        {
          name: 'Evaporation',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value:number) {
              return value as number + ' ml';
            }
          },
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
          ]
        },
        {
          name: 'Precipitation',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value:number) {
              return value as number + ' ml';
            }
          },
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
          ]
        },
        {
          name: 'Temperature',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value:number) {
              return value as number + ' °C';
            }
          },
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
      ]
    });

    let bnlChartRef = useRef<ECharts>(null);

    const onChartReadyCallback = (ref: RefObject<ECharts>) => {
      
      if(ref.current) {
        console.log(ref.current);
      }

    }

    const handleEvent = {
      
    }


  return (
    <>
      <ECharts
        option={options}
        opts={{renderer: 'svg', width: 'auto', height:'auto'}}
      />

      <ECharts
        option={heatmapChartOptions}
        opts={{renderer: 'svg', width: 'auto', height:'auto'}}
      />
      
      <ECharts
        ref={bnlChartRef}
        onChartReady={onChartReadyCallback}
        lazyUpdate={true}
        onEvents={handleEvent}
        option={bnlChartOptions}
        opts={{renderer: 'svg', width: 'auto', height:'auto'}}
      />
      
{/* 
        <input ref={inputRef} onKeyDown={handleEnterKeyDown}/>
        <button onClick={handleClick} >click</button>

        <div className='renderList'>
          <ul>
          { text.map((item, idx) => {
            
            return <li key={idx}>{idx} : {item}</li>
          })}
          </ul>
        </div> */}
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
    </>
  )
}
