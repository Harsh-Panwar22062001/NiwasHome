import React, { useState } from 'react';
import './Header.css';
import { BiHomeSmile, BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getmenuStyles = (menuOpened) => {
    return menuOpened ? { right: '2rem' } : { right: '-100%' };
  };

  return (
    <section className="h-wrapper">
      <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
        <div className="flexcenter innerWidth flexCenter h-container">
          <div className="logo-title">
            <div className="icon-text-container">
              <div className="font-six">
                <BiHomeSmile color="var(--blue)"   />
              </div>
              <h1 className="logo-ino">NiwasHome</h1>
            </div>
          </div>

          <div className="flexCenter h-menu" style={getmenuStyles(menuOpened)}>
            <a href="#">Residencies</a>
            <a href="#">Our Value</a>
            <a href="#">Get Started</a>
            <a href="#">Contact us</a>
            <button className="button">
              <a href="#">Contact</a>
            </button>
          </div>

          <div
            className="menu-icon"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </OutsideClickHandler>
    </section>
  );
};

export default Header;
