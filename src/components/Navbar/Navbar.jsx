import React, { useState } from 'react'
import { Drawer } from 'antd';
import './Navbar.scss'
import Logo from '../../assets/icons/logo.svg'

const Navbar = () => {

   const [visible, setVisible] = useState(false);
   const showDrawer = () => {
      setVisible(true);
   };
   const onClose = () => {
      setVisible(false);
   };

   return (
      <div className="navbar">
         <img src={Logo} alt="" />
         <nav>
            <ul>
               <li>About</li>
               <li>Services</li>
               <li>Projects</li>
               <li>Contact</li>
            </ul>
         </nav>

         <span class="material-icons" onClick={showDrawer}>
            menu
         </span>

         <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
         >
            <div className="menu">
               <p>About</p>
               <p>Sevices</p>
               <p>Projects</p>
               <p>Contact</p>
            </div>

         </Drawer>
      </div>
   )
}

export default Navbar
