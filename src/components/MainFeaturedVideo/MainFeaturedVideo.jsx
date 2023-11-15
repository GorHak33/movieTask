import React, {useEffect, useRef} from "react";
import styles from "./MainFeaturedVideo.module.css";
import {useSelector} from "react-redux";
import CoverImage from "../../assets/FeaturedCoverImage.png";

const MainFeaturedVideo = () => {
    const movies = useSelector(state => state.data.trendingNow);
    const featuredRedux = useSelector(state => state.data.featured);
    const movieIdFromSessionStorage = sessionStorage.getItem("movieId")
    const featured = movieIdFromSessionStorage ? movies.find(el => el.Id === movieIdFromSessionStorage) : featuredRedux
    const videoRef = useRef(null);

    useEffect(() => {
        if (!videoRef.current?.paused) {
            videoRef.current?.pause();
        }
        videoRef.current?.load();
        setTimeout(() => {
            videoRef.current?.play();
        }, 2000);
    }, [featured])

    return (
        <div className={styles.mainFeaturedVideo}>
            {!featured?.VideoUrl && <img src={CoverImage} alt="Video Cover" className={styles.coverImage}/>}
            {featured?.VideoUrl && <video ref={videoRef} width="100%" height="100%" muted loop playsInline>
                <source src={featured?.VideoUrl}/>
                Your browser does not support the video tag.
            </video>}
            <div className={styles.videoDetails}>
                <h4>{featured?.Category}</h4>
                <img
                    src={require(`../../assets/${!featured?.VideoUrl ? featured.TitleImage : featured?.CoverImage}`)}
                    alt="Movie Logo"
                    className={styles.movieLogo}
                />
                <p>
                    {featured?.ReleaseYear}, {featured.Duration}, {featured.MpaRating}
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className={styles.buttons}>
                    <button className={styles.playButton}>Play</button>
                    <button className={styles.moreInfoButton}>More Info</button>
                </div>
            </div>
        </div>
    );
};

export default MainFeaturedVideo;
