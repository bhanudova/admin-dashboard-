import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { LuPieChart } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { LuArrowLeftToLine } from "react-icons/lu";
export default function AdminSideBar() {

    return (<>
        <div className='relative h-full'>
            <div className='w-full py-6 mt-1 px-2 h-[92%] overflow-y-auto'>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2'>
                                <LuPieChart />
                                <h2 className='text-sm'>Home</h2>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className='w-[75%] mx-auto'>
                                <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>E commerce</li>
                                <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Project management</li>
                                <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>CRM</li>
                                <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Social feed</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

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
                                                    <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>cart</li>
                                                    <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Checkout</li>
                                                    <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Shipping info</li>
                                                    <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Profile</li>
                                                    <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Favorite stores</li>
                                                    <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Wishlist</li>
                                                    <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Order tracking</li>
                                                    <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Invoice</li>
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
                                <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>E commerce</li>
                                <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Project management</li>
                                <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>CRM</li>
                                <li className='hover:bg-gray-100 rounded-md hover:cursor-pointer p-1.5 px-3'>Social feed</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>


                </Accordion>

            </div>
            <div className='flex items-center h-[8%] justify-center border-t border-b w-full p-2 absolute bottom-0'>
            <LuArrowLeftToLine/><h2 className='text-sm font-bold'>Collapsed View</h2>
            </div>
        </div>
    </>)
}