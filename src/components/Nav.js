import React from 'react';
import { nav } from '../data';

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex gap-x-8 text-white'>
        {nav.map((item, idx) => {
          return (
            <li key={idx} className='hover:text-primary-200 transition'>
              {item.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;