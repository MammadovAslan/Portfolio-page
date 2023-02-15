import Navbar from "./Navbar/Navbar";
import { useState } from "react";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const closeSidebar = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;

    if (target.classList.contains("menu-box")) {
      setSidebar(false);
    }
  };

  return (
    <header className="header" onClick={closeSidebar}>
      <div className="header-name">
        &#123;{" "}
        <p className="fullname">
          <span className="firstname">ASLAN</span> <span className="lastname">MAMMADOV</span>
        </p>
        &#125;
      </div>
      <Navbar />
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
        <div className="menu-box">
          {/* Navbar mobile*/}
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
