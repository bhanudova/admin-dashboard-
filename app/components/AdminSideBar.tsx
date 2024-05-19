"use client"
import { useState } from 'react';
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AdminSideBar = () => {
    const [isHomeOpen, setIsHomeOpen] = useState(false);

    const toggleHomeMenu = () => {
        setIsHomeOpen(!isHomeOpen);
    };

    return (
        <div className='h-full relative'>
            <div className='p-4'>
                <nav>
                    <ul>
                        <li>
                            <button
                                className="w-full flex items-center justify-between text-left px-4 py-2 hover:bg-gray-200 rounded-md transition duration-300"
                                onClick={toggleHomeMenu}
                            >
                                <span>Home</span>
                                <span className={`transition-transform duration-300 ${isHomeOpen ? 'rotate-180' : 'rotate-0'}`}>
                                    {isHomeOpen ? <ChevronUp /> : <ChevronDown />}
                                </span>
                            </button>
                            <ul className={`overflow-hidden transition-all duration-300 ${isHomeOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} pl-4`}>
                                <li className="px-4 py-2 hover:bg-gray-100">Dashboard</li>
                                <li className="px-4 py-2 hover:bg-gray-100">Profile</li>
                                <li className="px-4 py-2 hover:bg-gray-100">Settings</li>
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
