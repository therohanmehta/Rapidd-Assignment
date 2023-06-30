import { useState } from "react";
import style from "./Navbar.module.css";
import DropDownMenu from "../dropDownMenu/DropDownMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import DropdownMenuSmall from "../dropDownMenu/DropdownMenuSmall";

function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const [menu, setMenu] = useState([
    { name: "Ipsum", active: false },
    { name: "Ipsum", active: false },
    { name: "Ipsum", active: false },
    { name: "Ipsum", active: false },
  ]);
  const [showHam, setShowHam] = useState(true);

  return (
    <>
      <div className={style.navBox}>
        <img
          src="https://pngimg.com/d/letter_r_PNG93920.png"
          alt="Company Logo"
        />
        <ul>
          {menu.map((ele, index) => {
            return (
              <li
                key={index}
                className={style.navItem}
                onClick={() => {
                  setDropDown(true);
                }}
                onMouseOver={() => setDropDown(true)}
                onMouseOut={() => setDropDown(false)}
              >
                {ele.name}
              </li>
            );
          })}
        </ul>
        {showHam ? (
          <h1
            onClick={() => {
              setShowHam(!showHam);
            }}
            className={style.Icon}
          >
            <GiHamburgerMenu />
          </h1>
        ) : (
          <h1
            onClick={() => {
              setShowHam(!showHam);
            }}
            className={style.Icon}
          >
            <RiCloseLine />
          </h1>
        )}
        {dropDown ? (
          <div
            className={style.ddMenu}
            onMouseOver={() => setDropDown(true)}
            onMouseOut={() => setDropDown(false)}
          >
            <DropdownMenuSmall />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={style.smallDropDownBox}>
        {showHam
          ? ""
          : menu.map((ele, index) => {
              return (
                <div
                  className={style.smallDropDown}
                  onClick={() => {
                    const tempMenu = [...menu];
                    tempMenu[index].active = !tempMenu[index].active;
                    setMenu(tempMenu);
                  }}
                  key={index}
                >
                  <h2>
                    {ele.name}
                    {ele.active ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
                  </h2>
                  {ele.active && (
                    <span>
                      <DropdownMenuSmall />
                    </span>
                  )}
                </div>
              );
            })}
      </div>
    </>
  );
}

export default Navbar;
