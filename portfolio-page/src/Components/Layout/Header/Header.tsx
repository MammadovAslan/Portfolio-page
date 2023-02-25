import Navbar from "./Navbar/Navbar";
import { useState, useEffect } from "react";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [top, setTop] = useState("");
  const { width } = useWindowDimensions();

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
      if (width >= 568) {
        if (scrollTop > lastScrollTop) {
          setTop("-112px");
          setSidebar(false);
        } else if (lastScrollTop > scrollTop + 10) {
          setTop("-0");
        }
        lastScrollTop = scrollTop;
      }
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
      <HeaderMenu setSidebar={setSidebar} sidebar={sidebar} />
    </header>
  );
};

export default Header;
