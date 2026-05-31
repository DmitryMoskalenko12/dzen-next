"use client";
import Image from 'next/image';
import img from '../../public/assets/avatar.webp';
import NavigationMenu from './NavigationMenu';
import './AsideMenu.css';

const AsideMenu = () => {

  return (
    <aside className="navigation-menu app__navigation-menu">
      <div className="navigation-menu__profile">
        <div className="navigation-menu__avatar" >
            <Image loading="eager" src={img} fill alt="Avatar" /> 
        </div>
        <button className="btn btn-light rounded-circle shadow navigation-menu__settings-button">
          <i className="navigation-menu__settings-icon bi bi-gear-fill" />
        </button>
      </div>
     <NavigationMenu/>
    </aside>
  );
};

export default AsideMenu;