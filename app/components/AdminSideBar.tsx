"use client";
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import React from 'react';
import { FaCaretRight, FaCaretUp } from "react-icons/fa6";
import { RiPieChartLine } from "react-icons/ri";

type Section = 'home' | 'profile' | null;

const AdminSideBar: React.FC = () => {
    const [openSection, setOpenSection] = useState<Section>(null);

    const toggleHomeMenu = () => {
        setOpenSection(openSection === 'home' ? null : 'home');
    };

    const toggleProfileMenu = () => {
        setOpenSection(openSection === 'profile' ? null : 'profile');
    };

    return (
        <div className='h-full relative'>
            <div className='px-4 py-4'>
                <nav className='text-[13px]'>
                    <ul>
                        <li>
                            <button
                                className="w-full font-medium flex items-center text-left gap-2 px-4 py-2 hover:bg-gray-200 rounded-md transition duration-300"
                                onClick={toggleHomeMenu}
                            >
                                <div className='flex items-center gap-[0.5px]'>
                                    <span className={`transition-transform duration-300 ${openSection === 'home' ? 'rotate-180' : 'rotate-0'}`}>
                                        {openSection === 'home' ? <FaCaretUp /> : <FaCaretRight />}
                                    </span>
                                    <RiPieChartLine className='w-4 h-4' />
                                </div>
                                <span>Home</span>
                            </button>
                            <ul className={`overflow-hidden transition-all duration-300 ${openSection === 'home' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} pl-4 text-[12px]`}>
                                <li className="px-8 py-2 hover:bg-gray-100 rounded-md">Dashboard</li>
                                <li className="px-8 py-2 hover:bg-gray-100 rounded-md">Profile</li>
                                <li className="px-8 py-2 hover:bg-gray-100 rounded-md">Settings</li>
                            </ul>
                        </li>
                        <li className='px-6 mt-4'>Apps</li>
                        <li>
                            <button
                                className="w-full font-medium flex items-center text-left gap-2 px-4 py-2 hover:bg-gray-200 rounded-md transition duration-300"
                                onClick={toggleProfileMenu}
                            >
                                <div className='flex items-center gap-[0.5px]'>
                                    <span className={`transition-transform duration-300 ${openSection === 'profile' ? 'rotate-180' : 'rotate-0'}`}>
                                        {openSection === 'profile' ? <FaCaretUp /> : <FaCaretRight />}
                                    </span>
                                    <ShoppingCart className='w-4 h-4' />
                                </div>
                                <span>E Commerce</span>
                            </button>
                            <ul className={`overflow-hidden transition-all duration-300 ${openSection === 'profile' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} pl-4 text-[12px]`}>
                                <li className="px-8 py-2 hover:bg-gray-100 rounded-md">Overview</li>
                                <li className="px-8 py-2 hover:bg-gray-100 rounded-md">Settings</li>
                                <li className="px-8 py-2 hover:bg-gray-100 rounded-md">Logout</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='border py-4 px-2 absolute bottom-0 w-full'>
                Collapse View
            </div>
        </div>
    );
}

export default AdminSideBar;
