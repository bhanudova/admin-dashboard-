import React from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { adminSideBarHomeList } from '@/lib/global';
import { LuPieChart } from 'react-icons/lu';
import Link from 'next/link';
const AdminSideNavHome = () => {
    return (
        <AccordionItem value="item-1">
            <AccordionTrigger>
                <div className='flex items-center gap-2'>
                    <LuPieChart />
                    <h2 className='text-sm'>Home</h2>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                {
                    adminSideBarHomeList.map((data: any, i: number) => (
                        <ul key={i} className='w-[75%] mx-auto'>
                            <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'><Link href={data.link}>{data.title}</Link></li>
                        </ul>
                    ))
                }
            </AccordionContent>
        </AccordionItem>
    )
}

export default AdminSideNavHome