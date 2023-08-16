import { FC } from 'react';

const Navbar: FC = () => {

    // Logic for theme button

    return (
        <div className="navbar bg-base-200">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-lg text-base-content font-bold">daisyUI</a>
            </div>
            {/* <div className="flex justify-end flex-1 px-2">
                <div className="flex items-stretch">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost rounded-btn">Dropdown</label>
                        <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-524" data-choose-theme>
                            <li><a data-set-theme="light">Light</a></li>
                            <li><a data-set-theme="dark">Dark</a></li>
                        </ul>
                    </div>
                </div>
            </div> */}
            {/* Try implementing a swap (find swap in daisyUI for more) */}
        </div>
    );
};

export default Navbar;