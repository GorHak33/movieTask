import React, {useState} from "react";
import styles from "./Sidebar.module.css"; // Import module CSS
import SearchIcon from "../../assets/icons/SearchIcon.png";
import MovieIcon from "../../assets/icons/MovieIcon.png";
import GenresIcon from "../../assets/icons/GenresIcon.png";
import HomeIcon from "../../assets/icons/HomeIcon.png";
import WatchLaterIcon from "../../assets/icons/WatchLaterIcon.png";
import Icon from "../../assets/icons/Icon.png";

const Sidebar = () => {
    const [backgroundBlockDisplay, setBackgroundBlockDisplay] = useState('none')

    return (
        <>
            <div
                style={{
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    display: backgroundBlockDisplay,
                    position: "absolute",
                    zIndex: 9999,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
                }}/>
            <div className={styles.sidebar}
                 onMouseMove={
                     backgroundBlockDisplay === 'none' ? () => setBackgroundBlockDisplay('block') : (() => {
                     })
                 }
                 onMouseLeave={() => setBackgroundBlockDisplay('none')}>
                <div className={styles.menu}>
                    <ul className={styles.mainMenu}
                    >
                        <li>
                            <img src={SearchIcon} alt="Search Icon" className={styles.icon}/>
                            <span className={styles.text}>Search</span>
                        </li>
                        <li>
                            <img src={HomeIcon} alt="Search Icon" className={styles.icon}/>
                            <span className={styles.text}>Home</span>
                        </li>
                        <li>
                            <img src={Icon} alt="Search Icon" className={styles.icon}/>
                            <span className={styles.text}>TV Shows</span>
                        </li>
                        <li>
                            <img src={MovieIcon} alt="Search Icon" className={styles.icon}/>
                            <span className={styles.text}>Movies</span>
                        </li>
                        <li>
                            <img src={GenresIcon} alt="Search Icon" className={styles.icon}/>
                            <span className={styles.text}>Genres</span>
                        </li>
                        <li>
                            <img src={WatchLaterIcon} alt="Icon" className={styles.icon}/>
                            <span className={styles.text}>Watch Later</span>
                        </li>
                    </ul>
                    <div className={styles.profileInfo}>
                        {/*<div className={styles.profileIcons}>/!* Profile icons *!/</div>*/}
                        <ul className={styles.additionalMenu}>
                            <li>Language</li>
                            <li>Get Help</li>
                            <li>Exit</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
