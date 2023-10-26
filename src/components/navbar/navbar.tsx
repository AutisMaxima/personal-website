"use client";

import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import { Cog6ToothIcon, PencilSquareIcon, Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Navbar = () => {

    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, []);

    return (
        <div className="navbar bg-base-100 sticky top-0 z-30 backdrop-blur bg-opacity-90">
            <div className="flex-none">
                {/* <Link href="/" className="btn btn-square btn-ghost">
                    <HomeIcon className="w-6 h-6 text-base-content" />
                </Link> */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <Bars3Icon className="w-6 h-6 text-base-content" />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm lg:menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base-content">
                        <li>
                            <Link href="/projects">
                                <span><Cog6ToothIcon className = "w-6 h-6 text-base-content"/></span><span>Projects</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/notes">
                                <span><PencilSquareIcon className = "w-6 h-6 text-base-content" /></span><span>Notes</span>
                            </Link>
                        </li>
                    </ul>
                </div>                    
            </div>
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-lg text-base-content font-bold">Home</Link>
            </div>
            <div className="flex justify-end flex-1 px-2">
                <div className="flex items-stretch">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost rounded-btn text-base-content">Theme</label>
                        <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-524" data-choose-theme>
                            <li><a data-set-theme="light" className="text-base-content">Light</a></li>
                            <li><a data-set-theme="dark" className="text-base-content">Dark</a></li>
                            <li><a data-set-theme="cupcake" className="text-base-content">Cupcake</a></li>
                            <li><a data-set-theme="night" className="text-base-content">Night</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;