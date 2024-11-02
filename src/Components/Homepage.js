import React from 'react'
import { LuUsers } from "react-icons/lu";
import { TbSpeakerphone } from "react-icons/tb";
import { GoHistory } from "react-icons/go";
import LineChart from './LinearChart';

function Homepage() {
  return (
    <div>
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Analytics</h1>
        <input
          type="text"
          placeholder="Select Date Range"
          className="p-2 border border-gray-300 bg-gray-300 rounded-md"
        />
      </header>
      <section className="sidebar-content">
          <section className="menu-section">
            <ul className="menu-items flex flex-row">
              <li className="flex flex-col items-start w-full p-2 border border-gray-200 rounded-md mx-2">
                <div className="flex flex-row justify-left items-center gap-2">
                  <div className="p-1 bg-blue-400 rounded-md">
                    <LuUsers size={20} className="text-blue-900 opacity-75" />
                  </div>
                  <span>Users</span>
                </div>
                <div className="w-full text-right">
                  <span className='text-blue-500 text-lg'>140</span>
                </div>
              </li>
              <li className="flex flex-col items-start w-full p-2 border border-gray-200 rounded-md mx-2">
                <div className="flex flex-row gap-2 items-center">
                  <div className="p-1 bg-green-400 rounded-md">
                    <TbSpeakerphone size={20} className="text-green-900 opacity-75" />
                  </div>
                  <span>Referral Users</span>
                </div>
                <div className="w-full text-right">
                  <span className='text-green-400 text-lg'>64</span>
                </div>
              </li>
              <li className="flex flex-col items-start w-full p-2  border border-gray-200 rounded-md mx-2">
                <div className="flex flex-row gap-2 items-center">
                  <div className="p-1 bg-blue-400 rounded-md">
                    <TbSpeakerphone size={20} className="text-blue-900 opacity-75" />
                  </div>
                  <span>Today's Organic Users</span>
                </div>
                <div className="w-full text-right">
                  <span className='text-blue-500 text-lg'>76</span>
                </div>
              </li>
            </ul>
            <ul className="menu-items flex flex-row">
              <li className="flex flex-col items-start w-full p-2 border border-gray-200 rounded-md mx-2 my-1">
                <div className="flex flex-row gap-2 items-center">
                  <div className="p-1 bg-green-400 rounded-md">
                    <GoHistory size={20} className="opacity-75 text-green-900" />
                  </div>
                  <span>This Week Users</span>
                </div>
                <div className="w-full text-right">
                  <span className='text-green-400 text-lg'>679</span>
                </div>
              </li>
              <li className="flex flex-col items-start w-full p-2 border border-gray-200 rounded-md mx-2 my-1">
                <div className="flex flex-row gap-2 items-center">
                  <div className="p-1 bg-green-400 rounded-md">
                    <GoHistory size={20} className="opacity-75 text-green-900" />
                  </div>
                  <span>This Month Users</span>
                </div>
                <div className="w-full text-right">
                  <span className='text-green-400 text-lg'>22727</span>
                </div>
              </li>
              <li className="flex flex-col items-start w-full p-2 border border-gray-200 rounded-md mx-2 my-1">
                <div className="flex flex-row gap-2 items-center">
                  <div className="p-1 bg-green-400 rounded-md">
                    <GoHistory size={20} className="opacity-75 text-green-900" />
                  </div>
                  <span>Last Month Users</span>
                </div>
                <div className="w-full text-right">
                  <span className='text-green-400 text-lg'>71291</span>
                </div>
              </li>             
            </ul>
          </section>
      </section>
      <div>
        <p>Last 7 Days: Registrations vs Referrals</p>
        <LineChart/>
      </div>
    </div>
  )
}

export default Homepage;
