"use client"
import React, { useState } from 'react';
import { FaCaretRight, FaCaretUp } from "react-icons/fa6";

interface MenuItemProps {
    item: {
        label: string;
        items: (string | MenuItemProps['item'])[];
    } | string;
    openSubMenu: string | null;
    setOpenSubMenu: (label: string | null) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, openSubMenu, setOpenSubMenu }) => {
    const isOpen = openSubMenu === (typeof item === 'string' ? '' : item.label);

    const toggleSubMenu = () => {
        setOpenSubMenu(isOpen ? null : (typeof item === 'string' ? '' : item.label));
    };

    if (typeof item === 'string') {
        return <li className="px-8 py-2 hover:bg-gray-100 rounded-md">{item}</li>;
    }

    return (
        <li className="pl-4">
            <button
                className="w-full font-medium flex items-center text-left gap-2 px-4 py-2 hover:bg-gray-200 rounded-md transition duration-300"
                onClick={toggleSubMenu}
            >
                <div className='flex items-center gap-[0.5px]'>
                    <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                        {isOpen ? <FaCaretUp className='text-gray-500' /> : <FaCaretRight className='text-gray-500' />}
                    </span>
                    <span>{item.label}</span>
                </div>
            </button>
            <ul className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'} pl-4 text-[12px]`}>
                {item.items.map((subItem, index) => (
                    <MenuItem key={index} item={subItem} openSubMenu={openSubMenu} setOpenSubMenu={setOpenSubMenu} />
                ))}
            </ul>
        </li>
    );
};

export default MenuItem;
