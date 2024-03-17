import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar bg-base-300 ">
      <div className="flex-1">
       <Link to="/" className="btn btn-ghost text-xl">BOT NOI</Link>
      </div>
      <div className="flex-none">
        <input type="checkbox" id="menu-toggle" className="hidden" />
        <label htmlFor="menu-toggle" className="block cursor-pointer lg:hidden">
          ☰
        </label>
        <ul className="menu menu-horizontal  lg:flex">
          <li>
            <details>
              <summary>
                Menu
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none ">
                <li className=''><Link to="/Resume_page">Resume</Link></li>
                <li className=''><Link to="/Star_page">StarPrinter</Link></li>
                <li className=''><Link to="/Pokemon_page">Pokemon</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}
