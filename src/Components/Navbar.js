import React from 'react'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import Homepage from './Homepage';
import Login from './Login';
import Register from './Register';
import { IoStatsChart } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { GoBell } from "react-icons/go";
import { FaRegCreditCard } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";

function Navbar() {
  return (

    <div>
        <Router>
        <div className="flex flex-row sm:gap-10">
            <div className="sm:w-full sm:max-w-[18rem]">
                <input type="checkbox" id="sidebar-mobile-fixed" className="sidebar-state" />
                <label htmlFor="sidebar-mobile-fixed" className="sidebar-overlay"></label>
                <aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
                    <section className="sidebar-title items-center p-4">
                        <svg fill="none" height="42" viewBox="0 0 32 32" width="42" xmlns="http://www.w3.org/2000/svg">
                            <rect height="100%" rx="16" width="100%"></rect>
                            <path clipRule="evenodd" d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                        <div className="flex flex-col">
                            <span>Appzest</span>
                        </div>
                    </section>
                    <section className="sidebar-content">
                        <nav className="menu rounded-md">
                            <section className="menu-section px-4">
                                <ul className="menu-items">
                                    <Link to='/' className="w-full">
                                        <li className="menu-item flex gap-2 items-center w-full">
                                        <IoStatsChart size={20} className="opacity-75" />
                                        <span>Analytics</span>
                                        </li>
                                    </Link>
                                    <li className="menu-item">
                                        <LuUsers size={20} className="opacity-75" />
                                        <span>Users</span>
                                    </li>

                                    <li>
                                        <input type="checkbox" id="menu-1" className="menu-toggle" />
                                        <label className="menu-item justify-between" htmlFor="menu-1">
                                            <div className="flex gap-2">
                                                <GoBell size={20} className="opacity-75" />
                                                <span>Notifications</span>
                                            </div>

                                            <span className="menu-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </label>

                                        <div className="menu-item-collapse">
                                            <div className="min-h-0">
                                                <label className="menu-item ml-6">Notification 1</label>
                                                <label className="menu-item ml-6">Notification 2</label>
                                                <label className="menu-item ml-6">Notification 3</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-item">
                                        <FaRegCreditCard size={20} className="opacity-75" />
                                        <span>Transactions</span>
                                    </li>
                                    <Link to='/Login' className="w-full">
                                        <li className="menu-item flex gap-2 items-center w-full">
                                        <CiLogin size={20} className="opacity-75" />
                                        <span>Login</span>
                                        </li>
                                    </Link>
                                </ul>
                            </section>
                        </nav>
                    </section>
                    <section className="sidebar-footer justify-end bg-gray-2 pt-2">
                        <div className="divider my-0"></div>
                        <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
                            <label className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4" tabIndex="0">
                                <div className="flex flex-row gap-4 p-4">
                                    <div className="avatar-square avatar avatar-md">
                                        <img src="https://i.pravatar.cc/150?img=30" alt="avatar" />
                                    </div>

                                    <div className="flex flex-col">
                                        <span>Sandra Marx</span>
                                    </div>
                                </div>
                            </label>
                            <div className="dropdown-menu-right-top dropdown-menu ml-2">
                                <Link className="dropdown-item text-sm" to='/Profile'>Profile</Link>
                                <Link tabIndex="-1" className="dropdown-item text-sm" to='/AccountSettings'>Account settings</Link>
                                <Link tabIndex="-1" className="dropdown-item text-sm" to='/ChangeEmail'>Change email</Link>
                                <Link tabIndex="-1" className="dropdown-item text-sm" to='/Subcriptions'>Subscriptions</Link>
                                <Link tabIndex="-1" className="dropdown-item text-sm" to='/ChangePassword'>Change password</Link>
                                <Link tabIndex="-1" className="dropdown-item text-sm" to='/Refer'>Refer a friend</Link>
                                <Link tabIndex="-1" className="dropdown-item text-sm" to='/Settings'>Settings</Link>
                            </div>
                        </div>
                    </section>
                </aside>
            </div>
            <div className="flex w-full flex-col p-4">
                <div className="w-fit">
                    <label htmlFor="sidebar-mobile-fixed" className="btn-primary btn sm:hidden"><FaBars /></label>
                </div>

                <div className="my-4">
                    <Routes>
                        <Route path='/' element={<Homepage/>}/>
                        <Route path='/Login' element={<Login/>}/>
                        <Route path='/Register' element={<Register/>}/>
                    </Routes>
                </div>
            </div>
        </div>
        </Router>
    </div>
  )
}

export default Navbar
