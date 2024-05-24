"use client"
import { donutCharts } from "@/lib/charts";
import { AgChartsReact } from "ag-charts-react";

export default function Page() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="border p-20 rounded-md bg-teal-500">

        </div>
        <div className="border p-20 rounded-md bg-emerald-300">

        </div>
      </div>
      <div className='w-full h-[20rem] md:w-full md:h-[40rem] lg:w-full lg:h-[40rem]'>
        <AgChartsReact options={donutCharts} />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="border p-20 rounded-md bg-indigo-300">

        </div>
        <div className="border p-20 rounded-md bg-sky-500">

        </div>
        <div className="border p-20 rounded-md bg-cyan-300">

        </div>
      </div>
    </div>
  )
}