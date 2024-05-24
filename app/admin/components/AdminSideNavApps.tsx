import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { IoCartOutline, IoChatboxOutline, IoShareSocial } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { PiNotepad } from 'react-icons/pi';
import { CiChat1 } from 'react-icons/ci';
import { SiEventstore } from 'react-icons/si';
import { RiInboxFill } from 'react-icons/ri';
const AdminSideNavApps = () => {
    return (
        <div>
            <h2 className='mt-3 mb-2 font-medium text-sm px-4'>Apps</h2>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    <div className='flex items-center gap-2'>
                        <IoCartOutline />
                        <h2 className='text-sm'>E Commerce</h2>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <ul className='w-[90%] mx-auto'>
                        <li>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Admin</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className='w-[80%] mx-auto'>
                                            <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Add product</li>
                                            <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Products</li>
                                            <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Customers</li>
                                            <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Customer details</li>
                                            <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Orders</li>
                                            <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Order details</li>
                                            <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Refund</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Customer</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className='w-[80%] mx-auto'>
                                            <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Homepage</li>
                                            <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Product details</li>
                                            <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Products filter</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>
                    <div className='flex items-center gap-2'>
                        <FiPhone />
                        <h2 className='text-sm'>CRM</h2>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <ul className='w-[75%] mx-auto'>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Analytics</li>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Deals</li>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Deal details</li>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Leads</li>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Lead details</li>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Reports</li>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Report details</li>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Add contact</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>
                    <div className='flex items-center gap-2'>
                        <PiNotepad />
                        <h2 className='text-sm'>Project management</h2>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <ul className='w-[75%] mx-auto'>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Create new</li>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Project list view</li>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Project card view</li>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Project board view</li>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Todo list</li>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Project details</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>
                    <div className='flex items-center gap-2'>
                        <CiChat1 />
                        <h2 className='text-sm'>Email</h2>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <ul className='w-[75%] mx-auto'>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Inbox</li>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Email detail</li>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Compose</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
                <AccordionTrigger>
                    <div className='flex items-center gap-2'>
                        <SiEventstore />
                        <h2 className='text-sm'>Events</h2>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <ul className='w-[75%] mx-auto'>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Create an event</li>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Event detail</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
                <AccordionTrigger>
                    <div className='flex items-center gap-2'>
                        <RiInboxFill />
                        <h2 className='text-sm'>Kanban</h2>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <ul className='w-[75%] mx-auto'>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Kanban</li>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Boards</li>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Create board</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
                <AccordionTrigger>
                    <div className='flex items-center gap-2'>
                        <IoShareSocial />
                        <h2 className='text-sm'>Social</h2>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <ul className='w-[75%] mx-auto'>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Profile</li>
                        <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Settings</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </div>
    )
}

export default AdminSideNavApps