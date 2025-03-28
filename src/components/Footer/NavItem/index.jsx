import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const NavItem = ({ title, submenu }) => {
  const [opened, setOpened] = useState(false);
  const submenuRef = useRef(null);

  const handleClick = () => {
    setOpened(prev => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpened(false);
        submenuRef.current.style.maxHeight = 0;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <li className={`nav__item nav__item_lvl1 ${opened ? 'nav__item_open' : ''}`} onClick={handleClick}>
      <div className='nav__link nav__link_lvl1 text-20'>{title}</div>
      <div className="nav__caret"></div>
      <ul 
        ref={submenuRef} 
        className='nav__submenu text-16' 
        style={{ maxHeight: opened ? submenuRef.current.scrollHeight : 0 }}
      >
        {submenu.map((item, index) => (
          <li key={index} className='nav__item nav__item_lvl2'>
            <NavLink to={item.link} target={item.target} className='nav__link nav__link_lvl2'>{item.text}</NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};
