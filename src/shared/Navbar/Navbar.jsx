
import { useContext, useEffect, useState } from "react";
import './navbar.css'
import { NavHashLink } from "react-router-hash-link";
import { ThemeContext } from "../../context/ThemeContext";
const Navbar = () => {
  const { toggle, mode } = useContext(ThemeContext);
  console.log(toggle, mode)
/*  navbar scroll color change  */
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= 50) {
          setColorChange(true);
      }
      else {
          setColorChange(false);
      }
  };
  window.addEventListener('scroll', changeNavbarColor);
  /*  navbar scroll color change  */

    const navItems = <>
        <li ><NavHashLink style={{ backgroundColor:'transparent', color: '#ffff'}} to="/home#home">Home</NavHashLink></li>
        <li ><NavHashLink style={{ backgroundColor:'transparent', color: '#ffff'}} to="/home#portfolio">Portfolio</NavHashLink></li>
        
        <li ><NavHashLink style={{ backgroundColor:'transparent', color: "#ffff"}} to="/home#blogs">Blogs</NavHashLink></li>
        <li ><NavHashLink style={{ backgroundColor:'transparent', color: "#ffff"}} to="/home#services">Services</NavHashLink></li>
       
        <li ><NavHashLink style={{ backgroundColor:'transparent', color: "#ffff"}} to="/home#about">About</NavHashLink></li>
        <li ><NavHashLink style={{ backgroundColor:'transparent', color:" #ffff"}} to="/home#contact">Contact</NavHashLink></li>
    </>
    return (
        <div className="">
     <div  className={colorChange ? 'navbar colorChange' : 'navbar  fixed top-0 z-10 bg-slate-200'}>
  <div className="navbar-start container mx-2 lg:mx-10 lg:px-8">
    <div className="dropdown ">
      <label tabIndex={0} className="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm miniNav w-[300px]  dropdown-content mt-3 z-[1]  shadow  rounded-box  font-semibold">
       {navItems}
      </ul>
    </div>
    <a  style={{
              background:
                "linear-gradient(90deg, #3f1eff, #f459ff, #fc6a93, #fff2a2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }} className="  text-xl uppercase font-bold text-white p-2 lg:p-0">Sayed Hossain</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
       {navItems}
    </ul>
  </div>
    <div className="relative">
    <label className="swap swap-rotate sm:absolute -right-28  lg:-right-16">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" 
 onChange={toggle} checked={mode === "dark"}
  />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
    </div>
</div>

 </div>
    );
};

export default Navbar;