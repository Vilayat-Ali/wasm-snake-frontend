import type {FC} from 'react';
import { useId } from 'react';
import Link from 'next/link';
import type {ITEM_TYPE} from "@/components/Navbar/options";
import {ITEMS} from "@/components/Navbar/options";
import { useDispatch } from 'react-redux';
import { toggleTheme } from '@/redux/slices/app.slice';

import {BsGithub} from "react-icons/bs";

const Navbar: FC = () => {
  const id: string = useId();
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {
              ITEMS.map((items: ITEM_TYPE) => (
                <li key={id}>
                  <Link href={items.href}>
                    {items.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            ITEMS.map((items: ITEM_TYPE) => (
              <li key={id}>
                <Link href={items.href}>
                  {items.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="navbar-end">
        <input type="checkbox" className="toggle mr-5" onChange={changeTheme} />
        <a className="btn" href="https://www.github.com/Vilayat-Ali/wasm-snake-frontend">
          <div className="flex flex-row items-center justify-around">
            <BsGithub style={{fontSize: '1.5rem'}} />
            <p className="ml-3">Github</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;