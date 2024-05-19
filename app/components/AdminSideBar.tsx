"use client";
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import React from 'react';
import { RiPieChartLine } from "react-icons/ri";
import MenuItem from './MenuItem';
import { FaCaretRight, FaCaretUp } from 'react-icons/fa6';

type Section = 'home' | 'profile' | 'ecommerce' | null;

interface MenuItemData {
    section: Section;
    icon: React.JSX.Element;
    label: string;
    items: (string | MenuItemData)[];
}

const menuData: MenuItemData[] = [
    {
        section: 'home',
        icon: <RiPieChartLine className='w-4 h-4 text-black/80' />,
        label: 'Home',
        items: ['Dashboard', 'Profile', 'Settings', 'CRM', 'ProjectManagement','Chat','Email']
    },
    {
        section: 'profile',
        icon: <ShoppingCart className='w-4 h-4' />,
        label: 'E Commerce',
        items: [
            {
                section: 'ecommerce',
                icon: <FaCaretRight className='w-4 h-4' />,
                label: 'Overview',
                items: ['Subitem 1', 'Subitem 2']
            },
            {
                section: 'ecommerce',
                icon: <FaCaretRight className='w-4 h-4' />,
                label: 'Settings',
                items: ['Setting 1', 'Setting 2']
            },
            {
                section: 'ecommerce',
                icon: <FaCaretRight className='w-4 h-4' />,
                label: 'Logout',
                items: ['Logout 1', 'Logout 2']
            }
        ]
    }
];

const AdminSideBar: React.FC = () => {
    const [openSection, setOpenSection] = useState<Section>(null);
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    const toggleMenu = (section: Section) => {
        setOpenSection(openSection === section ? null : section);
        setOpenSubMenu(null);  // Close any open sub-sections when toggling a main section
    };

    return (
        <div className='h-full relative'>
            <div className='px-4 py-4'>
                <nav className='text-[13px]'>
                    <ul>
                        {menuData.map((menu) => (
                            <li key={menu.section}>
                                <button
                                    className="w-full font-medium flex items-center text-left gap-2 px-4 py-2 hover:bg-gray-200 rounded-md transition duration-300"
                                    onClick={() => toggleMenu(menu.section)}
                                >
                                    <div className='flex items-center gap-[0.5px]'>
                                        <span className={`transition-transform duration-300 ${openSection === menu.section ? 'rotate-180' : 'rotate-0'}`}>
                                            {openSection === menu.section ? <FaCaretUp className='text-gray-500' /> : <FaCaretRight className='text-gray-500' />}
                                        </span>
                                        {menu.icon}
                                    </div>
                                    <span>{menu.label}</span>
                                </button>
                                <ul className={`overflow-hidden transition-all duration-300 ${openSection === menu.section ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} pl-4 text-[12px]`}>
                                    {menu.items.map((item, index) => (
                                        <MenuItem key={index} item={item} openSubMenu={openSubMenu} setOpenSubMenu={setOpenSubMenu} />
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className='border py-4 px-2 absolute bottom-0 w-full text-xs font-bold text-center'>
                <div className='flex items-center justify-center gap-2'>
                    <h2>Collapse View</h2> <ArrowRight className='w-4'/>
                </div>
            </div>
        </div>
    );
}

export default AdminSideBar;
