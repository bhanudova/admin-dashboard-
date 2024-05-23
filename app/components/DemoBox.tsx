"use client";
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AgChartsReact } from 'ag-charts-react';
import { chartOptions } from '@/lib/charts';

const DemoBox = () => {
   
    return (
        <div>
            <div className='w-full h-[40rem] p-10'>
                <AgChartsReact options={chartOptions} />
            </div>
            <div className='w-full h-[40rem] p-10'>
                <AgChartsReact options={chartOptions} />
            </div>
        </div>
    )
}

export default DemoBox