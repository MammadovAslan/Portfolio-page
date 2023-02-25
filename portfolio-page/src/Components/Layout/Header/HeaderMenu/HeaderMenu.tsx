import { useState } from "react";
import Navbar from "../Navbar/Navbar";

interface HeaderMenuProps {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderMenu = ({ setSidebar, sidebar }: HeaderMenuProps) => {
  return (
    <div className="header-menu">
      <input
        id="menu__toggle"
        type="checkbox"
        checked={sidebar}
        onChange={(e) => setSidebar(e.target.checked)}
      />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>
      <Navbar />
    </div>
  );
};

export default HeaderMenu;
