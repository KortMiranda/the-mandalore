import React from 'react';
import './Home.css';

function Home(props) {
    return (
        <div className="home-container">
            <div className="home-banner">
                <img src="https://res.cloudinary.com/dl3d3eyto/image/upload/v1633653406/The%20Mandalore/115908412_3382241241827677_2377189233613500797_n_c972zc.jpg" alt="mandalore banner" />
            </div>
            <div className="latest-release">
                <div className="cover-art">
                    <img src="https://res.cloudinary.com/dl3d3eyto/image/upload/v1633655129/The%20Mandalore/Screen_Shot_2021-10-07_at_8.00.25_PM_swzmqe.png" alt="cover art"/>
                </div>
                <div className="release-details">
                    <h3>New Single</h3>
                    <h2>Prisoner</h2>
                    <h3>Available Now</h3>
                    <button>Listen Now</button>
                </div>
            </div>
            <div className="newest-video">
                <h3>New Video</h3>
                <h2>Settle Down</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TgO_Y9IHC9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        
    );
}

export default Home;