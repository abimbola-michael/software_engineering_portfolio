import { MenuOutline } from "react-ionicons";
//import { jobRole } from "../data";
import AppLink from "./AppLink";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState<string>("#home");
  // const [showMenu, setShowMenu] = useState(false);
  // function toggleMenu() {
  //   setShowMenu((show) => !show);
  // }
  return (
    <header className="flex items-center justify-between py-2 px-[5%] cursor-pointer">
      <p className="font-bold text-xl">Michael</p>
      <div className="justify-start group">
        <div className="md:hidden">
          <MenuOutline />

          {/* {showMenu ? (
            <CloseOutline onClick={toggleMenu} />
          ) : (
            <MenuOutline onClick={toggleMenu} />
          )} */}
        </div>
        {/*${ !showMenu ? "hidden md:flex" : ""  } */}
        <div
          className={`absolute z-10 top-2 right-2 md:relative hidden group-hover:inline-flex flex-col md:flex-row md:flex items-center px-12 md:px-0 py-6 md:py-0 gap-6 bg-white shadow-lg md:shadow-none rounded-lg md:rounded-none`}
        >
          <AppLink href="#home" active={active} setActive={setActive}>
            Home
          </AppLink>
          <AppLink href="#about" active={active} setActive={setActive}>
            About
          </AppLink>
          <AppLink href="#projects" active={active} setActive={setActive}>
            Projects
          </AppLink>
          <AppLink href="#skills" active={active} setActive={setActive}>
            Skills
          </AppLink>
          <AppLink href="#contact" active={active} setActive={setActive}>
            Contact
          </AppLink>
        </div>
      </div>
    </header>
  );
}
