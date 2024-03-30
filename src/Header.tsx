import React, { useEffect, useState } from 'react';
import { classNames } from './Common';
import { Link } from 'react-scroll';


function Header() {
  const [collapse, setCollapse] = useState(true);

  useEffect(() => {
    function handleCollapse() {
      setCollapse(window.outerWidth <= 800 || window.innerWidth <= 800);
    }
    window.addEventListener('resize', handleCollapse);
    handleCollapse();
    return () => window.removeEventListener('resize', handleCollapse);
  }, []);

  return (
    <h1 className="header">
      <img
        className="logo"
        src="https://cdn.discordapp.com/attachments/1117557234461847723/1222307219471732816/banner7.png?ex=6615bd4e&is=6603484e&hm=6b9f79ea049da0d124e6f8b56cedfd0a089e36f38674a0e3ce69df8711c29eed&"
        alt="Logo"
      />
      <span className="collapse-button" onClick={() => setCollapse((prev) => !prev)}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
        </svg>
      </span>
      <ul className={classNames(collapse ? 'hidden' : '', 'collapse-navigation')}>
       <li className='navButton'>
         <Link to="presale" smooth={true} offset={-50} duration={500}>presale</Link>
       </li>
        <li className='navButton'>
         <Link to="solvenomics" smooth={true} offset={-50} duration={500}>solvenomics</Link>
        </li>
        <li className='navButton'>
         <Link to="roadmap" smooth={true} offset={-50} duration={500}>roadmap</Link>
        </li>
      </ul>
    </h1>
  );
}

export default Header;
