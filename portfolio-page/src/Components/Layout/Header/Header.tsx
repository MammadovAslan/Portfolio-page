import Navbar from "./Navbar/Navbar";
import { useState, useEffect } from "react";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [top, setTop] = useState("");

  const closeSidebar = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;

    if (target.classList.contains("menu-box")) {
      setSidebar(false);
    }
  };

  let lastScrollTop = 0;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset;
      if (scrollTop > lastScrollTop) {
        setTop("-104px");
      } else if(lastScrollTop > scrollTop+10) {
        setTop("-0");
      }
      lastScrollTop = scrollTop;
    });
  }, []);

  const style = {
    top: top,
  };

  return (
    <header className="header" onClick={closeSidebar} style={style}>
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
