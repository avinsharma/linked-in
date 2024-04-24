// Header.js
import React from 'react';
import './Header.css'; // Import CSS file for styling
import { ReactComponent as LinkedInLogo }  from '../../../assets/svgs/linkedin-logo.svg';
import headers from './headers.json'
import SvgComponent from '../../common/SvgComponent';

const Header = () => {
  return (
    <header >
      <div className="flex ">
        <div className='p-4 mx-10 w-1/2 link-no-visited-state text-color-brand ' ><LinkedInLogo className="w-1/5"  /></div>
        <nav className='w-1/5'>
            <ul className="flex justify-between  " >
              {
                headers.map(header => (
                <li className='p-4 ' key={header.name}>
                  <SvgComponent name={header.logo} />
                  {header.name}
                  </li>
                ))
              }
            </ul>
        </nav>
        <ul className="flex justify-between p-4 " >
            <li className='btn'>Join Now</li>
            <li className='btn btn-linked-in btn-secondary-emphasis'>Sign In</li>
            </ul>
        </div>
    </header>
  );
};

export default Header;
