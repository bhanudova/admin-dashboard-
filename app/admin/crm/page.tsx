"use client"
import { chartOptions } from "@/lib/charts";
import { AgChartsReact } from "ag-charts-react";

export default function Page() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="border p-20 rounded-md bg-green-300">

        </div>
        <div className="border p-20 rounded-md bg-orange-300">

        </div>
      </div>
      <div className='w-full h-[20rem] md:w-full md:h-[40rem] lg:w-full lg:h-[40rem]'>
        <AgChartsReact options={chartOptions} />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="border p-20 rounded-md bg-fuchsia-300">

        </div>
        <div className="border p-20 rounded-md bg-purple-500">

        </div>
        <div className="border p-20 rounded-md bg-indigo-300">

        </div>
      </div>
    </div>
  )
}