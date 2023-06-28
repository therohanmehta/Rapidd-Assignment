// import React from 'react'
import style from "./HeaderNav.module.css";

function HeaderNav() {
  return (
    <>
      <nav>
        <div className={style.imgDiv}>
          <img
            style={{
              width: 160,
              height: 72,
              border: "0.50px #34333B solid",
            }}
            src="https://via.placeholder.com/160x72"
          />
        </div>

        <div className={style.navBtn}>
          <span>Ipsum</span>
          <span>Ipsum</span>
          <span>Ipsum</span>
          <span>Ipsum</span>
        </div>
      </nav>

      {/* <div className={style.dropdown}>

        <div className={style.subLinks}>
        <span ><b>Ispusnloda</b></span>
        <ul >
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>

        </div>
        <div className={style.subLinks}>
        <span ><b>Ispusnloda</b></span>
        <ul >
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>

        </div>
        

      </div> */}
    </>
  );
}

export default HeaderNav;
