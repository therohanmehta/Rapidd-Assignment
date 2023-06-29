import React, { useState } from "react";
import style from "./Navbar.module.css";
import DropDownMenu from "../dropDownMenu/DropDownMenu";

function Navbar() {
  const [dropDown, setDropDown] = useState(false)
  const menu = ["Ipsum", "Ipsum", "Ipsum", "Ipsum"];
  return (
    <div className={style.navBox}>
      <img
        src="https://s3.ap-southeast-1.amazonaws.com/cdn.elitmus.com/pv47kaalgysujzsemzaaf2juo0gx"
        alt="Company Logo"
      />
      <ul>
        {menu.map((ele, index) => {
          return (
            <li key={index} className={style.navItem} onMouseOver={()=>setDropDown(true)} onMouseOut={()=>setDropDown(false)}>
              {ele}
            </li>
          );
        })}
      </ul>
      {dropDown?(<div className={style.ddMenu} onMouseOver={()=>setDropDown(true)} onMouseOut={()=>setDropDown(false)}>
      <DropDownMenu/>
      </div>):''}
    </div>
  );
}

export default Navbar;
