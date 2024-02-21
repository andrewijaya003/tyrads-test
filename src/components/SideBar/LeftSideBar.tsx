import { LuMessagesSquare, LuUsers2 } from "react-icons/lu";
import { RiFolder3Line, RiHome3Line, RiLogoutBoxRLine, RiNotification3Line, RiSettings3Line, RiTimeLine, RiUser3Line } from "react-icons/ri";
import styles from './LeftSideBar.module.css'; 

function LeftSideBar() {
    return (
        <div id='sidenav' className={styles.sidenav}>
            <div id='nav1' className={styles.nav1}>
                <a href='' className={styles.logo} id='logo'>
                    S.
                </a>
                <a href='' className={styles.message} id='message'>
                    <LuMessagesSquare />
                </a>
            </div>
            <div id='nav2' className={styles.nav2}>
                <a href='' className={styles.menu} id='home'>
                    <RiHome3Line />
                </a>
                <a href='' className={styles.menu} id='notif'>
                    <RiNotification3Line />
                </a>
                <a href='' className={styles.menu} id='time'>
                    <RiTimeLine />
                </a>
                <a href='' className={styles.menu} id='friend'>
                    <LuUsers2 />
                </a>
                <a href='' className={styles.menu} id='folder'>
                    <RiFolder3Line />
                </a>
                <a href='' className={styles.menu} id='setting'>
                    <RiSettings3Line />
                </a>
            </div>
            <div id='nav3' className={styles.nav3}>
                <a href='' className={styles.menu} id='profile'>
                    <RiUser3Line />
                </a>
                <a href='' className={styles.menu} id='logout'>
                    <RiLogoutBoxRLine />
                </a>
            </div>
        </div>
    )
}

export default LeftSideBar