import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import SearchIcon from "../../assets/icons/SearchIcon.png";
import MovieIcon from "../../assets/icons/MovieIcon.png";
import GenresIcon from "../../assets/icons/GenresIcon.png";
import HomeIcon from "../../assets/icons/HomeIcon.png";
import WatchLaterIcon from "../../assets/icons/WatchLaterIcon.png";
import Icon from "../../assets/icons/Icon.png";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = item => {
    setActiveItem(item);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.menu}>
        <ul className={styles.mainMenu}>
          <li
            className={activeItem === "search" ? styles.active : ""}
            onClick={() => handleItemClick("search")}
          >
            <img src={SearchIcon} alt="Search Icon" className={styles.icon} />
            <span className={styles.text}>Search</span>
          </li>
          <li
            className={activeItem === "home" ? styles.active : ""}
            onClick={() => handleItemClick("home")}
          >
            <img src={HomeIcon} alt="Home Icon" className={styles.icon} />
            <span className={styles.text}>Home</span>
          </li>
          <li
            className={activeItem === "tvShows" ? styles.active : ""}
            onClick={() => handleItemClick("tvShows")}
          >
            <img src={Icon} alt="TV Shows Icon" className={styles.icon} />
            <span className={styles.text}>TV Shows</span>
          </li>
          <li
            className={activeItem === "movies" ? styles.active : ""}
            onClick={() => handleItemClick("movies")}
          >
            <img src={MovieIcon} alt="Movies Icon" className={styles.icon} />
            <span className={styles.text}>Movies</span>
          </li>
          <li
            className={activeItem === "genres" ? styles.active : ""}
            onClick={() => handleItemClick("genres")}
          >
            <img src={GenresIcon} alt="Genres Icon" className={styles.icon} />
            <span className={styles.text}>Genres</span>
          </li>
          <li
            className={activeItem === "watchLater" ? styles.active : ""}
            onClick={() => handleItemClick("watchLater")}
          >
            <img
              src={WatchLaterIcon}
              alt="Watch Later Icon"
              className={styles.icon}
            />
            <span className={styles.text}>Watch Later</span>
          </li>
        </ul>
        <div className={styles.profileInfo}>
          <div className={styles.profileIcons}>{/* Profile icons */}</div>
          <ul className={styles.additionalMenu}>
            <li>Language</li>
            <li>Get Help</li>
            <li>Exit</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
