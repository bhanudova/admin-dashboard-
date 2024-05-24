"use client"
import React from 'react';
import { LuArrowLeftToLine } from "react-icons/lu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LuPieChart } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { adminSideBarHomeList } from '@/lib/global';
import Link from 'next/link';
import AdminSideNavApps from './AdminSideNavApps';
import AdminSideNavHome from './AdminSideNavHome';
import AdminSideBarPages from './AdminSideBarPages';

const AdminSideNav = ({ toggleSidebar }: any) => (


    <nav className='h-full w-full flex flex-col'>
        <div className='flex-grow bg-white overflow-hidden pr-[1px] py-[1px]'>
            <div className='overflow-y-auto h-full p-2 scrollbar' id="style-1">
                <div>
                    <Accordion type="single" collapsible>
                        <AdminSideNavHome/>
                       <AdminSideNavApps/>
                       <AdminSideBarPages/>
                    </Accordion>
                </div>
            </div>
        </div>
        <div className='p-[16.5px] relative text-sm font-bold border-t bg-white'>
            <div onClick={toggleSidebar} className="flex cursor-pointer justify-center gap-1 items-center">
                <LuArrowLeftToLine className="text-xl" /> <h2>Collapsed View</h2>
            </div>
        </div>
    </nav>
);

export default AdminSideNav;
