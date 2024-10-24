import { MdOutlineChat, MdSearch, MdNotifications, MdPublic } from 'react-icons/md';
import styles from './navbar.module.scss'
import { useLocation } from 'react-router-dom'
import ToggleComponent from '../../pure/toggle/toggle';
import { SunIcon, MoonIcon } from 'lucide-react'
import { useState } from 'react';

export default function NavBar() {
  const location = useLocation();
  const pathname = location.pathname;
  document.body.classList.add('dark');
  const [isChecked, setIsChecked] = useState(true); 
  const toogle_change =()=>{
    console.log("se presionao el toogle")
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()?.toUpperCase()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type='text' placeholder='Search' className={styles.input} />

        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <ToggleComponent
            onIcon={<SunIcon className="text-gray-500" />}
            offIcon={<MoonIcon className="text-gray-500" />} 
           // isChecked={isChecked}
          // onChange={toogle_change}
          />
          {/*  <MdPublic size={20}/>*/}
        </div>
      </div>
    </div>
  )
}