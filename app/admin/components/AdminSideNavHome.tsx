import React from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { adminSideBarHomeList } from '@/lib/global';
import { LuPieChart } from 'react-icons/lu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const AdminSideNavHome = () => {
    const router = useRouter();
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
                            <li onClick={()=>router.push(`${data.link}`)} className='hover:bg-gray-100 rounded-md hover:cursor-pointer font-medium p-1.5 px-3'>{data.title}</li>
                        </ul>
                    ))
                }
            </AccordionContent>
        </AccordionItem>
    )
}

export default AdminSideNavHome