"use client";
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AgChartsReact } from 'ag-charts-react';
import { chartOptions, lineCharts, pieCharts } from '@/lib/charts';

const DemoBox = () => {
   
    return (
        <div>
            <div className='w-full h-[20rem] md:w-full md:h-[40rem] lg:w-full lg:h-[40rem] p-10'>
                <AgChartsReact options={chartOptions} />
            </div>
            <div className='w-full h-[20rem] md:w-full md:h-[40rem] lg:w-full lg:h-[40rem] p-10'>
                <AgChartsReact options={pieCharts} />
            </div>
            <div className='w-full h-[20rem] md:w-full md:h-[40rem] lg:w-full lg:h-[40rem] p-10'>
                <AgChartsReact options={lineCharts} />
            </div>
        </div>
    )
}

export default DemoBox