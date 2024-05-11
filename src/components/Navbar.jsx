import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useState } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <nav>
      <div className="navbar align-elements">
        <div className="navbar-start">
          {/* Title */}
          <NavLink
            to={'/'}
            className="hidden lg:flex btn btn-primary text-3xl items-center font-serif"
          >
            C
          </NavLink>
          {/* DropDown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6"></FaBarsStaggered>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
            >
              <NavLinks></NavLinks>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks></NavLinks>
          </ul>
        </div>
        <div className="navbar-end">
          {/* Theme Setup */}
          <label className="swap swap-flip">
            <input type="checkbox" onChange={handleTheme} />

            {/* Sun */}
            <BsSunFill className="swap-on h-4 w-4"></BsSunFill>

            <BsMoonFill className="swap-off h-4 w-4"></BsMoonFill>
          </label>

          {/* Cart Link */}
          <NavLink
            to={'/cart'}
            className={'btn btn-ghost btn-circle btn-md ml-4'}
          >
            <div className="indicator">
              <BsCart3 className="h-6 w-6"></BsCart3>
              <span className="badge badge-neutral indicator-item">69</span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
