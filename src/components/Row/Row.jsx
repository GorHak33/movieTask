import React, { useEffect, useRef } from "react";
import styles from "./Row.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateFeatured } from "../../Redux/dataSlice/dataSlice";

export default function Row() {
  const movies = useSelector(state => state.data.trendingNow);
  const dispatch = useDispatch();
  const handleClick = movie => {
    dispatch(updateFeatured(movie));
    sessionStorage.setItem("movieId", movie.Id);
  };
  const elRef = useRef();

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      let isScrolling = false;
      let startX;
      let startY;
      let scrollLeft;
      let scrollTop;
      const onTouchStart = e => {
        isScrolling = true;
        startX = e.touches[0].pageX - el.offsetLeft;
        startY = e.touches[0].pageY - el.offsetTop;
        scrollLeft = el.scrollLeft;
        scrollTop = el.scrollTop;
      };
      const onTouchMove = e => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.touches[0].pageX - el.offsetLeft;
        const y = e.touches[0].pageY - el.offsetTop;
        const distanceX = x - startX;
        const distanceY = y - startY;
        el.scrollLeft = scrollLeft - distanceX;
        el.scrollTop = scrollTop - distanceY;
      };

      const onTouchEnd = () => {
        isScrolling = false;
      };

      const onWheel = e => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 3,
          behavior: "smooth",
        });
      };

      el.addEventListener("touchstart", onTouchStart);
      el.addEventListener("touchmove", onTouchMove);
      el.addEventListener("touchend", onTouchEnd);
      el.addEventListener("wheel", onWheel);

      return () => {
        el.removeEventListener("touchstart", onTouchStart);
        el.removeEventListener("touchmove", onTouchMove);
        el.removeEventListener("touchend", onTouchEnd);
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, [elRef]);

  return (
    <div className={styles.rowBlock}>
      <div className={styles.row}>
        <h2>Trending Now</h2>
        <div className={styles.row__posters} ref={elRef}>
          {movies.map(movie => {
            return (
              <img
                className={styles.row__poster}
                key={movie.Id}
                src={require(`../../assets/${movie.CoverImage}`)}
                alt={movie?.Title}
                onClick={() => {
                  handleClick(movie);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
